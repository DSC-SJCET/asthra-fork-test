import { type Config } from 'drizzle-kit';

import { env } from '~/env.js';

export default {
  schema: './server/db/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  }
} satisfies Config;
