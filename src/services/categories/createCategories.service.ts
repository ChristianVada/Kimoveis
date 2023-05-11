import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import {
  ICategoryReq,
  ICategoryRes,
} from "../../interfaces/category.interfaces"
import { SchemaCategoryRes } from "../../schemas/category.schemas"

const createCategoryService = async (
  categoryData: ICategoryReq
): Promise<ICategoryRes> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category)

  const categoryCreate = categoryRepository.create(categoryData)

  await categoryRepository.save(categoryCreate)

  const validateRes = SchemaCategoryRes.parse(categoryCreate)

  return validateRes
}

export default createCategoryService
