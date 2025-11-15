import { ItemVenda } from 'src/venda/itemVenda.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @Column()
  estoque: number;
  
  @OneToMany(() => ItemVenda, (item) => item.produto, { cascade: true })
  itens: ItemVenda[];
}
