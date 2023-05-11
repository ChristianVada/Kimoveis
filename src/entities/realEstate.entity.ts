import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import Address from "./addresses.entity"
import Category from "./categories.entity"
import Schedules from "./schedules.entity"

@Entity("real_estate")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column({ type: "boolean", default: false })
  sold: boolean

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: string | number

  @Column({ type: "integer" })
  size: number

  @CreateDateColumn({ type: "date" })
  createdAt: Date | string

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date | string

  @OneToMany(() => Schedules, (schedules) => schedules.realEstate)
  schedules: Schedules[]

  @OneToOne(() => Address, (address) => address.realEstate)
  @JoinColumn()
  address: Address

  @ManyToOne(() => Category, (category) => category.realEstate)
  category: Category
}

export default RealEstate
