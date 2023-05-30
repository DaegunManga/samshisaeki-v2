import './utils/dotenv';
import Server from './server';
import Database from './database';

const server = new Server({
  logger: true,
});
const database = new Database();

async function bootstrap() {
  await database.connect();
  await server.start(process.env.PORT);
}

bootstrap();
