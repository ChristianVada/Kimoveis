import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { Address, RealEstate } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../error"

const ensureAddressNotExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const address = req.body.address

  if (address) {
    const AddressSearch: Repository<Address> =
      AppDataSource.getRepository(Address)

    const findAddress: Address | null = await AddressSearch.findOne({
      where: address,
    })

    if (findAddress) {
      throw new AppError("Address already exists", 409)
    }
  }

  return next()
}

export default ensureAddressNotExists
