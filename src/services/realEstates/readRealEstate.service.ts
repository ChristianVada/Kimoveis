import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"

const readRealEstateService = async (): Promise<RealEstate[]> => {
  const realEstateRepository = AppDataSource.getRepository(RealEstate)

  const realEstate = await realEstateRepository.find({
    relations: ["address"],
  })

  return realEstate
}

export default readRealEstateService
