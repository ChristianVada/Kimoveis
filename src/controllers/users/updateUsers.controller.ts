import { Request, Response } from "express"
import { updateUsersService } from "../../services"
import { IUserRes } from "../../interfaces/users.interfaces"

const updateUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: IUserRes = req.body

  const userId = Number(req.params.id)

  const newDateuser = await updateUsersService(userData, userId)

  return res.status(200).json(newDateuser)
}

export default updateUsersController
