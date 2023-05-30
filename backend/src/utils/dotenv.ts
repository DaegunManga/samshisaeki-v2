import { resolve } from 'path';
import { config } from 'dotenv';

const { NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
  config({ path: resolve(process.cwd(), '.env.development') });
} else if (NODE_ENV === 'test') {
  config({ path: resolve(process.cwd(), '.env.test') });
} else if (NODE_ENV === 'production') {
  config({ path: resolve(process.cwd(), '.env') });
} else {
  config({ path: resolve(process.cwd(), '.env.development') });
}
