import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { RealEstate } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../error"

const ensureIdRealEstateExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const idRealEstate = req.body.realEstateId

  const idRealEstateSearch: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate)

  const findId: RealEstate | null = await idRealEstateSearch.findOneBy({
    id: idRealEstate,
  })

  if (!findId) {
    throw new AppError("RealEstate not found", 404)
  }

  return next()
}

export default ensureIdRealEstateExists
