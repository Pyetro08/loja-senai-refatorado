  import { Module } from '@nestjs/common';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { Venda } from './venda.entity';
  import { Funcionario } from '../funcionario/funcionario.entity';
  import { VendaService } from './venda.service';
  import { VendaController } from './venda.controller';
  import { ItemVenda } from './itemVenda.entity';
  import { Produto } from 'src/products/products.entity';

  @Module({
    imports: [TypeOrmModule.forFeature([Venda, Funcionario, ItemVenda, Produto])],
    controllers: [VendaController],
    providers: [VendaService],
  })
  export class VendaModule {}
