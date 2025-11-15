import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venda } from './venda.entity';
import { Funcionario } from '../funcionario/funcionario.entity';

@Injectable()
export class VendaService {
  constructor(
    @InjectRepository(Venda)
    private vendaRepo: Repository<Venda>,

    @InjectRepository(Funcionario)
    private funcRepo: Repository<Funcionario>,
  ) {}

  // GET
  findAll() {
    return this.vendaRepo.find();
  }

  // POST
  async create(data: any) {
    const funcionario = await this.funcRepo.findOne({
      where: { id: data.funcionarioId }
    });

    if (!funcionario) {
      throw new NotFoundException('Funcionário não encontrado');
    }

    const venda = this.vendaRepo.create({
      data: data.data,
      total: data.total,
      funcionario: funcionario
    });

    return this.vendaRepo.save(venda);
  }

  // PUT
  async update(id: number, data: any) {
    const venda = await this.vendaRepo.findOne({ where: { id } });

    if (!venda) {
      throw new NotFoundException('Venda não encontrada');
    }

    if (data.funcionarioId) {
      const funcionario = await this.funcRepo.findOne({
        where: { id: data.funcionarioId },
      });

      if (!funcionario) {
        throw new NotFoundException('Funcionário não encontrado');
      }

      venda.funcionario = funcionario;
    }

    venda.data = data.data ?? venda.data;
    venda.total = data.total ?? venda.total;

    return this.vendaRepo.save(venda);
  }

  // DELETE
  async delete(id: number) {
    const venda = await this.vendaRepo.findOne({ where: { id } });

    if (!venda) {
      throw new NotFoundException('Venda não encontrada');
    }

    return this.vendaRepo.remove(venda);
  }
}
