import { Request, Response } from "express"
import { deleteUsersService } from "../../services"

const deleteUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(req.params.id)

  await deleteUsersService(userId)

  return res.status(204).send()
}

export default deleteUsersController
