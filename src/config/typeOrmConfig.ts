import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  host: 'localhost',
  port: 5432,
  password: 'admin',
  database: 'todo',
  type: 'postgres',
  entities: [__dirname + '/../**/entities/*.entity.{ts,js}'],
  synchronize: true,
};
