import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Produto } from './products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Produto>) {
    return this.productsService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Produto>) {
    return this.productsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
