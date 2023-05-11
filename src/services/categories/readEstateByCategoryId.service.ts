import { Repository } from "typeorm"
import { Category } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../error"

const readEstateByCategoryIdService = async (
  categoryId: number
): Promise<Category> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category)

  const findEstate: Category | null = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      realEstate: true,
    },
  })

  if (!findEstate) {
    throw new AppError("Category not found", 404)
  }
  return findEstate
}

export default readEstateByCategoryIdService
