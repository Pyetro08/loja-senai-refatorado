import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemVenda } from '../venda/itemVenda.entity';
import { Produto } from './products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemVenda, Produto])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
