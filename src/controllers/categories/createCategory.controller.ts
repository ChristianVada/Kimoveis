import { Request, Response } from "express"
import { createCategoryService } from "../../services"
import { ICategoryReq } from "../../interfaces/category.interfaces"

const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryData: ICategoryReq = req.body

  const newCategory = await createCategoryService(categoryData)

  return res.status(201).json(newCategory)
}

export default createCategoryController
