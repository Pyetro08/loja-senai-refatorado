import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id_funcionario: number;

  @Column()
  nome: string;

  @Column()
  turno: string;
}
