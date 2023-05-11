import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { ICategoryRes } from "../../interfaces/category.interfaces"
import { SchemaCategoryRes } from "../../schemas/category.schemas"

const readCategoryService = async (): Promise<ICategoryRes[]> => {
  const categoryResository = AppDataSource.getRepository(Category)

  const categoryFind = await categoryResository.find()

  const validateRes = SchemaCategoryRes.array().parse(categoryFind)

  return validateRes
}

export default readCategoryService
