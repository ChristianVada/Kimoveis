import { NextFunction, Request, Response } from "express"
import { AppError } from "../../error"
import { Repository } from "typeorm"
import { User } from "../../entities"
import { AppDataSource } from "../../data-source"

const ensureIsAdminOrSelf = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userID = Number(res.locals.decoded.sub)

  const requestedUserID = Number(req.params.id)

  const userIsAdm: Repository<User> = AppDataSource.getRepository(User)

  const findAdm: User | null = await userIsAdm.findOne({
    where: { id: userID },
  })

  if (findAdm!.admin === false && userID !== requestedUserID) {
    throw new AppError("Insufficient permission", 403)
  }

  return next()
}

export default ensureIsAdminOrSelf
