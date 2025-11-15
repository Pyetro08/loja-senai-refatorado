import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Venda } from './venda.entity';
import { Produto } from '../products/products.entity';

@Entity()
export class ItemVenda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantidade: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precoUnitario: number;

  @Column('decimal', { precision: 10, scale: 2 })
  subtotal: number;

  @ManyToOne(() => Venda, (venda) => venda.itens, { onDelete: 'CASCADE' })
  venda: Venda;

  @ManyToOne(() => Produto, { eager: true })
  produto: Produto;
}
