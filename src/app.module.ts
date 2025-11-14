import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customers/customers.module';
import { Customer } from './customers/customer.entity';
import { FuncionarioModule } from './funcionario/funcionario.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'curso',
      autoLoadEntities: true,
      synchronize: false, // pode usar TRUE no dev
    }),
    CustomerModule,
    FuncionarioModule,
    
  ],
})
export class AppModule {}

