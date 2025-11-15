import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './funcionario.entity';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioController } from './funcionario.controller';
import { Venda } from 'src/venda/venda.entity';
import { ItemVenda } from 'src/venda/itemVenda.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario, ItemVenda])],
  controllers: [FuncionarioController],
  providers: [FuncionarioService],
})
export class FuncionarioModule {}

