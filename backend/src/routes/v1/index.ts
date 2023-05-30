import { FastifyPluginAsync } from 'fastify';
import authRoute from './auth';

const V1Route: FastifyPluginAsync = async (fastify, _) => {
  fastify.register(authRoute, { prefix: '/auth' });

  return;
};

export default V1Route;
