import { z } from "zod"
import SchemaLogin from "../schemas/login.shemas"

type ILoginUser = z.infer<typeof SchemaLogin>

export default ILoginUser
