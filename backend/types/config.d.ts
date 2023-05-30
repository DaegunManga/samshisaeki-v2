declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test' | undefined;

      PORT: string;
      HOST: string;
      CORS_WHITELISTS: string;
      VERSION: string;

      ACCESS_JWT_SECRET: string;
      REFRESH_JWT_SECRET: string;
      COOKIE_SECRET: string;

      NODEMAILER_HOST: string;
      NODEMAILER_PORT: string;
      NODEMAILER_SECURE: 'true' | 'false';
      NODEMAILER_AUTH_USER: string;
      NODEMAILER_AUTH_PASS: string;

      // Typeorm Setting
      TYPEORM_CONNECTION: 'postgres' | 'mysql' | 'sqlite' | 'mssql';
      TYPEORM_HOST: string;
      TYPEORM_PORT: string;
      TYPEORM_USERNAME: string;
      TYPEORM_PASSWORD: string;
      TYPEORM_DATABASE: string;
      TYPEORM_SYNCHRONIZE: 'true' | 'false';
      TYPEORM_DROPSCHEMA: 'true' | 'false';
      TYPEORM_LOGGING: 'true' | 'false';
    }
  }
}

export {};
