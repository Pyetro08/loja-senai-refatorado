import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Produto)
    private productsRepository: Repository<Produto>,
  ) {}

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: number) {
    return this.productsRepository.findOneBy({ id });
  }

  create(data: Partial<Produto>) {
    const product = this.productsRepository.create(data);
    return this.productsRepository.save(product);
  }

  update(id: number, data: Partial<Produto>) {
    return this.productsRepository.update(id, data);
  }

  delete(id: number) {
    return this.productsRepository.delete(id);
  }
}
