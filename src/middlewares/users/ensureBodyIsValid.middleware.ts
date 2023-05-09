import { NextFunction, Request, Response } from "express"
import { ZodTypeAny } from "zod"

const ensureBodyisValid =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validadeBody = schema.parse(req.body)

    req.body = validadeBody

    return next()
  }

export default ensureBodyisValid
