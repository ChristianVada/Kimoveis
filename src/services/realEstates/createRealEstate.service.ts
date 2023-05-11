import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { IRealEstateFullReq } from "../../interfaces/realEstate.interfaces"
import { AppError } from "../../error"

const createRealEstateService = async (
  realEstateData: IRealEstateFullReq
): Promise<RealEstate> => {
  const addresRepository: Repository<Address> =
    AppDataSource.getRepository(Address)

  const realEstateAddress = realEstateData.address

  delete realEstateData["address"]

  const createdAddress = addresRepository.create(realEstateAddress!)

  await addresRepository.save(createdAddress)

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category)

  const findCategory = await categoryRepository.findOneBy({
    id: realEstateData.categoryId,
  })

  if (!findCategory) {
    throw new AppError("Category not found", 404)
  }

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate)

  const createdRealEstate = realEstateRepository.create({
    ...realEstateData,
    address: createdAddress,
    category: findCategory,
  })

  await realEstateRepository.save(createdRealEstate)

  return createdRealEstate
}

export default createRealEstateService
