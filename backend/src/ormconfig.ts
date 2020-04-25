import * as dotenv from 'dotenv';
import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config();

console.log(process.env.POSTGRES_PASSWORD);

const config: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  entities: [join(__dirname, '**/**.entity{.ts,.js}')],
  migrations: ['src/migration/*.ts'],
};

export = config;
