import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { Category } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../error"

const ensureCategoryNotExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const categoryName = req.body.name

  const categorySearch: Repository<Category> =
    AppDataSource.getRepository(Category)

  const findName: Category | null = await categorySearch.findOne({
    where: { name: categoryName },
  })

  if (findName) {
    throw new AppError("Category already exists", 409)
  }

  return next()
}

export default ensureCategoryNotExists
