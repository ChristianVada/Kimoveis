import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { Schedule } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../error"

const ensureUserScheduleNotExits = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const date: string = req.body.date
  const hour: string = req.body.hour
  const userId: number = Number(res.locals.decoded.sub)

  const scheduleSearch: Repository<Schedule> =
    AppDataSource.getRepository(Schedule)

  const findUserDateAndHour: Schedule | null = await scheduleSearch
    .createQueryBuilder("schedule")
    .where("schedule.userId = :userId", { userId })
    .andWhere("schedule.date = :date", { date })
    .andWhere("schedule.hour = :hour", { hour })
    .getOne()

  if (findUserDateAndHour) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    )
  }

  return next()
}

export default ensureUserScheduleNotExits
