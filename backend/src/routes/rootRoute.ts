import { FastifyPluginAsync } from 'fastify';

const rootRoute: FastifyPluginAsync = async (fastify, _) => {
  fastify.get('/ping', async () => {
    return {
      message: 'pong',
      version: process.env.VERSION,
    };
  });

  return;
};

export default rootRoute;
