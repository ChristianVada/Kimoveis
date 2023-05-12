import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { Schedule } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../error"

const ensureDataAndHourIsValid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const date: string = req.body.date
  const formatDate = new Date(date)

  const hour: string = req.body.hour

  if (hour > "18:00" || hour < "08:00") {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
  }

  const dateInstance = formatDate.getDay()

  if (dateInstance == 0 || dateInstance == 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400)
  }

  return next()
}
export default ensureDataAndHourIsValid
