import { MigrationInterface, QueryRunner } from "typeorm";

export class RealEstateUpdateAtFixToCategoryToUpdateDateColomn1683808316396 implements MigrationInterface {
    name = 'RealEstateUpdateAtFixToCategoryToUpdateDateColomn1683808316396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "createAt" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
