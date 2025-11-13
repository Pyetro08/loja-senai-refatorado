import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CustomerService } from './customers.service';
import { Customer } from './customer.entity';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  // GET /customers
  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  // POST /customers
  @Post()
  create(@Body() data: Partial<Customer>): Promise<Customer> {
    return this.customerService.create(data);
  }

  // PUT /customers/:id
  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Customer>): Promise<Customer> {
    return this.customerService.update(id, data);
  }

  // DELETE /customers/:id
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.customerService.delete(id);
  }
}
