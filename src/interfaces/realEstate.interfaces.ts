import { z } from "zod"
import {
  SchemaFullRealEstateReq,
  SchemaRealEstateAddress,
  SchemaRealEstateReq,
  SchemaRealEstateRes,
} from "../schemas/realEstate.schemas"

type IRealEstateReq = z.infer<typeof SchemaRealEstateReq>

type IRealEsteteAddress = z.infer<typeof SchemaRealEstateAddress>

type IRealEstateFullReq = z.infer<typeof SchemaFullRealEstateReq>

type IRealEstateRes = z.infer<typeof SchemaRealEstateRes>

export {
  IRealEstateReq,
  IRealEstateRes,
  IRealEstateFullReq,
  IRealEsteteAddress,
}
