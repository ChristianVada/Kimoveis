import { Request, Response } from "express"
import { readScheduleByRealEstateService } from "../../services"

const readScheduleByRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idRealEstate = Number(req.params.id)

  const realEstates = await readScheduleByRealEstateService(idRealEstate)

  return res.status(200).json(realEstates)
}

export default readScheduleByRealEstateController
