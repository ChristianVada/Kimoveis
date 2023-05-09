import { Repository } from "typeorm"
import { IUserRes, IUserUpdate } from "../../interfaces/users.interfaces"
import { User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { SchemaUsersRes } from "../../schemas/users.schemas"

const updateUsersService = async (
  userData: IUserUpdate,
  userId: number
): Promise<IUserRes> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId,
  })

  const newUserData = userRepository.create({
    ...oldUserData,
    ...userData,
  })

  await userRepository.save(newUserData)

  const validateRes = SchemaUsersRes.parse(newUserData)

  return validateRes
}

export default updateUsersService
