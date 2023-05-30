import { FastifyPluginAsync } from 'fastify';
import AuthService from './authService';
import { RegisterBody, SendMailBody, ValidateBody } from './validation';

const authRoute: FastifyPluginAsync = async (fastify, _) => {
  fastify.post('/register', async (req, res) => {
    const body = req.body as RegisterBody;
    return AuthService.register(body);
  });
  fastify.post('/send-mail', async (req, res) => {
    const body = req.body as SendMailBody;
    return AuthService.sendMail(body);
  });
  fastify.post('/validate', async (req, res) => {
    const body = req.body as ValidateBody;
    return AuthService.sendMail(body);
  });
};

export default authRoute;
