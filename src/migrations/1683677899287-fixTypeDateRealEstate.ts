import { MigrationInterface, QueryRunner } from "typeorm";

export class FixTypeDateRealEstate1683677899287 implements MigrationInterface {
    name = 'FixTypeDateRealEstate1683677899287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "updatedAt" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
