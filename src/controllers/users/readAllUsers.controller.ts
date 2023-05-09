import { Request, Response } from "express"
import { IUserRes } from "../../interfaces/users.interfaces"
import { readAllUsersService } from "../../services"

const readAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await readAllUsersService()

  return res.status(200).json(users)
}

export default readAllUsersController
