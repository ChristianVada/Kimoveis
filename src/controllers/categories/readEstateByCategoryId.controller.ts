import { Request, Response } from "express"
import { readEstateByCategoryIdService } from "../../services"

const readEstateByCategoryIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryId = Number(req.params.id)

  const readEstates = await readEstateByCategoryIdService(categoryId)

  return res.status(200).json(readEstates)
}

export default readEstateByCategoryIdController
