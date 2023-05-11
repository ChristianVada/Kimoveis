import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUserReq, IUserRes } from "../../interfaces/users.interfaces"
import { SchemaUsersRes } from "../../schemas/users.schemas"

const createUsersService = async (userData: IUserReq): Promise<IUserRes> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const userCreate = userRepository.create(userData)

  await userRepository.save(userCreate)

  const validateRes = SchemaUsersRes.parse(userCreate)

  return validateRes
}

export default createUsersService
