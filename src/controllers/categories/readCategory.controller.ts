import { Request, Response } from "express"
import { readCategoryService } from "../../services"

const readCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allCategories = await readCategoryService()

  return res.status(200).json(allCategories)
}

export default readCategoryController
