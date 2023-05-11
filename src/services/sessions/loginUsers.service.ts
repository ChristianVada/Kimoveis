import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../error"
import * as bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import ILoginUser from "../../interfaces/login,interfaces"
import "dotenv/config"

const loginUsersService = async (
  userData: ILoginUser
): Promise<{ token: string }> => {
  const userRepository = AppDataSource.getRepository(User)

  const userResponse = await userRepository.findOneBy({
    email: userData.email,
  })

  if (!userResponse) {
    throw new AppError("Invalid credentials", 401)
  }

  const comparePassword = bcrypt.compareSync(
    userData.password,
    userResponse.password
  )

  if (!comparePassword) {
    throw new AppError("Invalid credentials", 401)
  }

  const token = jwt.sign(
    {
      email: userResponse.email,
      admin: userResponse.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "1d",
      subject: userResponse.id.toString(),
    }
  )

  return { token }
}

export default loginUsersService
