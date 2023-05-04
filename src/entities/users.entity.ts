import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import Schedules from "./schedules.entity"

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

  @CreateDateColumn()
  createdAt: Date

  @CreateDateColumn()
  updatedAt: Date

  @CreateDateColumn({ nullable: true })
  deletedAt: Date

  @OneToMany(() => Schedules, (schedules) => schedules.user)
  schedules: Schedules[]
}

export default User
