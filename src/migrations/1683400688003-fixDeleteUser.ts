import { MigrationInterface, QueryRunner } from "typeorm";

export class FixDeleteUser1683400688003 implements MigrationInterface {
    name = 'FixDeleteUser1683400688003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "deletedAt" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "deletedAt" SET DEFAULT now()`);
    }

}
