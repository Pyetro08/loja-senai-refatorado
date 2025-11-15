import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateVendaTable1763159293001 implements MigrationInterface {
    name = 'CreateVendaTable1763159293001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`funcionario\` CHANGE \`id_funcionario\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`CREATE TABLE \`produto\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`preco\` decimal(10,2) NOT NULL, \`estoque\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`item_venda\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantidade\` int NOT NULL, \`precoUnitario\` decimal(10,2) NOT NULL, \`subtotal\` decimal(10,2) NOT NULL, \`vendaId\` int NULL, \`produtoId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`venda\` (\`id\` int NOT NULL AUTO_INCREMENT, \`data\` varchar(255) NOT NULL, \`total\` decimal(10,2) NOT NULL, \`funcionarioId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`item_venda\` ADD CONSTRAINT \`FK_6bcbbdd00a894c290d4f42c11be\` FOREIGN KEY (\`vendaId\`) REFERENCES \`venda\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`item_venda\` ADD CONSTRAINT \`FK_65f61d41037270472ecf9b07f77\` FOREIGN KEY (\`produtoId\`) REFERENCES \`produto\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`venda\` ADD CONSTRAINT \`FK_b6bb77e5e19871f5aa0cb569f49\` FOREIGN KEY (\`funcionarioId\`) REFERENCES \`funcionario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`venda\` DROP FOREIGN KEY \`FK_b6bb77e5e19871f5aa0cb569f49\``);
        await queryRunner.query(`ALTER TABLE \`item_venda\` DROP FOREIGN KEY \`FK_65f61d41037270472ecf9b07f77\``);
        await queryRunner.query(`ALTER TABLE \`item_venda\` DROP FOREIGN KEY \`FK_6bcbbdd00a894c290d4f42c11be\``);
        await queryRunner.query(`DROP TABLE \`venda\``);
        await queryRunner.query(`DROP TABLE \`item_venda\``);
        await queryRunner.query(`DROP TABLE \`produto\``);
        await queryRunner.query(`ALTER TABLE \`funcionario\` CHANGE \`id\` \`id_funcionario\` int NOT NULL AUTO_INCREMENT`);
    }

}
