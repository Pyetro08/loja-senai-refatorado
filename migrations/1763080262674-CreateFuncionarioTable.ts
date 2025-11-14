import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFuncionarioTable1763080262674 implements MigrationInterface {
    name = 'CreateFuncionarioTable1763080262674'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`funcionario\` (\`id_funcionario\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`turno\` varchar(255) NOT NULL, PRIMARY KEY (\`id_funcionario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(15) NULL, \`birthDate\` date NULL, UNIQUE INDEX \`IDX_8536b8b85c06969f84f0c098b0\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_8536b8b85c06969f84f0c098b0\` ON \`customers\``);
        await queryRunner.query(`DROP TABLE \`customers\``);
        await queryRunner.query(`DROP TABLE \`funcionario\``);
    }

}
