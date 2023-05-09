import { Response, Request } from "express"
import { loginUsersService } from "../../services"
import ILoginUser from "../../interfaces/login,interfaces"

const loginUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: ILoginUser = req.body
  const token = await loginUsersService(userData)

  return res.status(200).json(token)
}

export default loginUsersController
