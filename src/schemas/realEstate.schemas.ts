import { z } from "zod"

const SchemaRealEstateReq = z.object({
  value: z.string().or(z.number().default(0)),
  size: z.number().int().gt(0),
  categoryId: z.number().int(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).optional().nullable(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
})

const SchemaRealEstateAddress = z.object({
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional(),
  city: z.string().max(20),
  state: z.string().max(2),
})

const SchemaFullRealEstateReq = SchemaRealEstateReq.extend({
  address: z.optional(SchemaRealEstateAddress),
})

const SchemaRealEstateRes = z.object({
  id: z.number(),
  value: z.number(),
  size: z.number(),
  address: z.optional(SchemaRealEstateAddress),
  category: z.object({
    name: z.string().optional(),
  }),
  sold: z.boolean(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})

export {
  SchemaRealEstateReq,
  SchemaRealEstateRes,
  SchemaFullRealEstateReq,
  SchemaRealEstateAddress,
}
