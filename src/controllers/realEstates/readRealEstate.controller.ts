import { Request, Response } from "express"
import { readRealEstateService } from "../../services"

const readRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstates = await readRealEstateService()

  return res.status(200).json(realEstates)
}
export default readRealEstateController
