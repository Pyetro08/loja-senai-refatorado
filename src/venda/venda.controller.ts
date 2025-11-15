import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { VendaService } from './venda.service';

@Controller('vendas')
export class VendaController {
  constructor(private service: VendaService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
