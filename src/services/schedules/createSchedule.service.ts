import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule, User } from "../../entities"
import { IScheduleReq } from "../../interfaces/schedule.interfaces"

const createScheduleService = async (
  scheduleData: IScheduleReq,
  userId: number
): Promise<Schedule> => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({ id: userId })

  const realEstateRepository = AppDataSource.getRepository(RealEstate)

  const realEstate = await realEstateRepository.findOneBy({
    id: scheduleData.realEstateId,
  })

  const scheduleRepository = AppDataSource.getRepository(Schedule)

  const createdSchedule: Schedule = scheduleRepository.create({
    ...scheduleData,
    realEstate: realEstate!,
    user: user!,
  })

  await scheduleRepository.save(createdSchedule)

  return createdSchedule
}

export default createScheduleService
