import { NextFunction, Request, Response } from "express"
import { AppError } from "../../error"
import { Repository } from "typeorm"
import { User } from "../../entities"
import { AppDataSource } from "../../data-source"

const ensureIsAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userAdmin = res.locals.decoded.admin

  if (userAdmin === false) {
    throw new AppError("Insufficient permission", 403)
  }

  return next()
}

export default ensureIsAdmin
