import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule } from "../../entities"

const readScheduleByRealEstateService = async (
  realEstateId: number
): Promise<RealEstate | null> => {
  const realEstateRepository = AppDataSource.getRepository(RealEstate)

  const realEstate = await realEstateRepository
    .createQueryBuilder("realEstate")
    .leftJoinAndSelect("realEstate.schedules", "schedule")
    .leftJoinAndSelect("schedule.user", "user")
    .leftJoinAndSelect("realEstate.address", "address")
    .leftJoinAndSelect("realEstate.category", "category")
    .where("realEstate.id = :realEstateId", { realEstateId })
    .getOne()

  return realEstate
}

export default readScheduleByRealEstateService
