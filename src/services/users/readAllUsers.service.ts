import { Repository } from "typeorm"
import { User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { SchemaUsersRes } from "../../schemas/users.schemas"
import { IUserRes } from "../../interfaces/users.interfaces"

const readAllUsersService = async (): Promise<IUserRes[]> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const userReponse = await userRepository.find()

  const validateRes = SchemaUsersRes.array().parse(userReponse)

  return validateRes
}

export default readAllUsersService
