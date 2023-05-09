import { Request, Response } from "express"
import { createUsersService } from "../../services"
import { IUserReq, IUserRes } from "../../interfaces/users.interfaces"
import { User } from "../../entities"

const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: IUserReq = req.body
  const newData = await createUsersService(userData)

  return res.status(201).json(newData)
}

export default createUsersController
