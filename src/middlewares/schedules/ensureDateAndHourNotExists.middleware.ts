import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { Schedule } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../error"

const ensureDateAndHourNotExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const date: string = req.body.date

  const hour: string = req.body.hour

  const scheduleSearch: Repository<Schedule> =
    AppDataSource.getRepository(Schedule)

  const findDateAndHour: Schedule | null = await scheduleSearch
    .createQueryBuilder("schedule")
    .where("schedule.date = :date", { date })
    .andWhere("schedule.hour = :hour", { hour })
    .getOne()

  if (findDateAndHour) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    )
  }

  return next()
}

export default ensureDateAndHourNotExists
