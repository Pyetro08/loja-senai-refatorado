import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from './funcionario.entity';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private repo: Repository<Funcionario>,
  ) {}

  // GET
  findAll() {
    return this.repo.find();
  }

  // POST
  create(data: Partial<Funcionario>) {
    const funcionario = this.repo.create(data);
    return this.repo.save(funcionario);
  }

  // PUT
  async update(id: number, data: Partial<Funcionario>) {
    const funcionario = await this.repo.findOne({ where: { id } });

    if (!funcionario) {
      throw new NotFoundException('Funcionário não encontrado');
    }

    Object.assign(funcionario, data);
    return this.repo.save(funcionario);
  }

  // DELETE
  async delete(id: number) {
    const funcionario = await this.repo.findOne({ where: { id } });

    if (!funcionario) {
      throw new NotFoundException('Funcionário não encontrado');
    }

    return this.repo.remove(funcionario);
  }
}
