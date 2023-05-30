import { FastifyPluginAsync } from 'fastify';
import V1Route from './v1/auth';

const rootRoute: FastifyPluginAsync = async (fastify, _) => {
  fastify.register(V1Route, { prefix: '/v1' });

  fastify.get('/ping', async () => {
    return {
      message: 'pong',
      version: process.env.VERSION,
    };
  });

  return;
};

export default rootRoute;
