import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Funcionario } from '../funcionario/funcionario.entity';
import { OneToMany } from 'typeorm'
import { ItemVenda } from '../venda/itemVenda.entity';


@Entity()
export class Venda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @ManyToOne(() => Funcionario, { eager: true })
  funcionario: Funcionario;

  @OneToMany(() => ItemVenda, (item) => item.venda, { cascade: true })
  itens: ItemVenda[];

}
