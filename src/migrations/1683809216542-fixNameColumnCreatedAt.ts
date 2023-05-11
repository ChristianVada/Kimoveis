import { MigrationInterface, QueryRunner } from "typeorm";

export class FixNameColumnCreatedAt1683809216542 implements MigrationInterface {
    name = 'FixNameColumnCreatedAt1683809216542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "createAt" TO "createdAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "createdAt" TO "createAt"`);
    }

}
