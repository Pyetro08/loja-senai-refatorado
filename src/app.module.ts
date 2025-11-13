import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customers/customers.module';
import { Customer } from './customers/customer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'curso',
      entities: [Customer],
      synchronize: true, // pode usar TRUE no dev
    }),
    CustomerModule,
  ],
})
export class AppModule {}
