import { z } from "zod"

const SchemaLogin = z.object({
  email: z.string().email().max(45),
  password: z.string().max(120),
})

export default SchemaLogin
