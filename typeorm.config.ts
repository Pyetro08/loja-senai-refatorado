import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'loja_senai',
  entities: ['**/*.entity.ts'],
  migrations: ['dist/migrations/*.js'],
});
