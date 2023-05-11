import { Request, Response } from "express"
import { createRealEstateService } from "../../services"
import { IRealEstateFullReq } from "../../interfaces/realEstate.interfaces"

const createRealEstateController = async (req: Request, res: Response) => {
  const realEstaData: IRealEstateFullReq = req.body

  const newData = await createRealEstateService(realEstaData)

  return res.status(201).json(newData)
}

export default createRealEstateController
