import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../error"

const ensureIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId = Number(req.params.id)

  if (userId) {
    const idSearch: Repository<User> = AppDataSource.getRepository(User)

    const findId: User | null = await idSearch.findOne({
      where: { id: userId },
    })

    if (!findId) {
      throw new AppError("User not found", 404)
    }
  }
  return next()
}

export default ensureIdExists
