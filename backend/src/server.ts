import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import fastifyCors, { FastifyCorsOptions } from '@fastify/cors';
import fastifyCookie from '@fastify/cookie';
import { CustomError, ErrorType } from './utils/errors/CustomError';
import ResponseMessage from './utils/errors/ResponseMessage';
import rootRoute from './routes';

export default class Server {
  private readonly app: FastifyInstance;
  private corsOptions: FastifyCorsOptions;

  constructor(options?: FastifyServerOptions) {
    this.app = fastify(options);
    this.corsSetup(process.env.CORS_WHITELISTS || '');

    try {
      this.app.register(fastifyCors, this.corsOptions);
      this.app.register(fastifyCookie, {
        secret: process.env.COOKIE_SECRET,
      });

      this.app.register(rootRoute, { prefix: '/' });
    } catch (err) {
      this.app.log.error(err);
      process.exit(1);
    }
  }

  async start(port: string | number = 5000) {
    const PORT = Number(port);
    try {
      await this.app.listen({ port: PORT });
    } catch (err) {
      this.app.log.error(err);
      process.exit(1);
    }
  }

  corsSetup(whitelists: string) {
    const whiltelist = whitelists.split(',');

    if (whitelists === '*') {
      this.corsOptions = {
        origin: true,
        credentials: true,
      };
      return;
    }

    this.corsOptions = {
      origin: (origin, cb) => {
        if (!origin) return cb(null, true);
        if (whiltelist.indexOf(origin) !== -1) {
          cb(null, true);
        } else {
          throw new CustomError({
            type: ErrorType.FORBIDDEN,
            details: ResponseMessage.CORS_NOT_ALLOWED,
          });
        }
      },
      credentials: true,
    };
  }
}
