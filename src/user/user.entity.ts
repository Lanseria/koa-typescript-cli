import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, comment: "用户名" })
  name: string;

  @Column({ comment: "密码" })
  password: string;

}