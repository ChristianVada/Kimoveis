import { z } from "zod"
import { SchemaUsersRes, SchemaUsersReq } from "../schemas/users.schemas"
import { DeepPartial } from "typeorm"

type IUserRes = z.infer<typeof SchemaUsersRes>

type IUserReq = z.infer<typeof SchemaUsersReq>

type IUserUpdate = DeepPartial<IUserReq>

export { IUserRes, IUserReq, IUserUpdate }
