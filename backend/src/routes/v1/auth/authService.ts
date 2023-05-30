import cacheManager from '@src/utils/cacheManager';
import { CustomError, ErrorType } from '@src/utils/errors/CustomError';
import ResponseMessage from '@src/utils/errors/ResponseMessage';
import mailer from '@src/utils/mail';
import { RegisterBody, SendMailBody, ValidateBody } from './validation';

const REGISTERED_OK = 'REGISTERED_OK';

export default class AuthService {
  static async register({ email, ...details }: RegisterBody) {
    const isQualified = await cacheManager.get(email);

    if (!isQualified || isQualified !== REGISTERED_OK) {
      throw new CustomError({
        type: ErrorType.BAD_REQUEST,
        details: ResponseMessage.INVALID_REQUEST,
      });
    }

    // TODO: Create User Entity
  }

  static async sendMail({ email }: SendMailBody) {
    // Send Email validation mail
    const validationKey = Math.floor(Math.random() * 1000000).toString();
    const content = ValidationMailForm(validationKey);

    // Validate Daegun High School Email
    if (!email.endsWith('@daegun.hs.kr'))
      throw new CustomError({
        type: ErrorType.FORBIDDEN,
        details: ResponseMessage.FORBIDDEN,
      });

    try {
      const ttl = 1000 * 60 * 5; // 5 Minutes
      const result = await cacheManager.set(email, validationKey, ttl);

      if (!result)
        throw new CustomError({
          type: ErrorType.INTERNAL_SERVER_ERROR,
          details: ResponseMessage.INTERNAL_SERVER_ERROR,
        });

      await mailer.sendMail({
        to: email,
        html: content,
      });

      return true;
    } catch (err) {
      throw new CustomError({
        type: ErrorType.INTERNAL_SERVER_ERROR,
        details: ResponseMessage.INTERNAL_SERVER_ERROR,
      });
    }
  }

  static async validate({ email, key }: ValidateBody) {
    const originalKey = await cacheManager.get(email);

    if (!originalKey)
      throw new CustomError({
        type: ErrorType.NOT_FOUND,
        details: ResponseMessage.NOT_FOUND,
      });

    if (originalKey !== key)
      throw new CustomError({
        type: ErrorType.UNAUTHORIZED,
        details: ResponseMessage.UNAUTHORIZED,
      });

    const result = await cacheManager.set(email, REGISTERED_OK);

    if (!result)
      throw new CustomError({
        type: ErrorType.INTERNAL_SERVER_ERROR,
        details: ResponseMessage.INTERNAL_SERVER_ERROR,
      });

    return true;
  }
}
