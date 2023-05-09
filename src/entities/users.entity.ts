import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import Schedules from "./schedules.entity"
import * as bcrypt from "bcryptjs"
import { getRounds, hashSync } from "bcryptjs"

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column({ type: "varchar", length: 45 })
  name: string

  @Column({ type: "varchar", length: 45, unique: true })
  email: string

  @Column({ type: "boolean", default: false })
  admin: boolean

  @Column({ type: "varchar", length: 120 })
  password: string

  @CreateDateColumn({ type: "date" })
  createdAt: Date | string

  @CreateDateColumn({ type: "date" })
  updatedAt: Date | string

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date

  @OneToMany(() => Schedules, (schedules) => schedules.user)
  schedules: Schedules[]

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted: number = getRounds(this.password)

    if (!isEncrypted) {
      this.password = bcrypt.hashSync(this.password, 10)
    }
  }
}

export default User
