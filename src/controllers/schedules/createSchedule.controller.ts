import { Request, Response } from "express"
import { createScheduleService } from "../../services"
import { IScheduleReq } from "../../interfaces/schedule.interfaces"

const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const scheduleData: IScheduleReq = req.body

  const userId = Number(res.locals.decoded.sub)

  const newData = await createScheduleService(scheduleData, userId)

  return res.status(201).json({ message: "Schedule created" })
}

export default createScheduleController
