import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customers/customers.module';
import { Customer } from './customers/customer.entity';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { VendaModule } from './venda/venda.module';
import { ItemVenda } from './venda/itemVenda.entity';


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
    VendaModule,
    ItemVenda,
  ],
})
export class AppModule {}

