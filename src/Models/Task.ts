import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, OneToOne}from "typeorm"
import { User } from "./User.js"

@Entity()
export class Task{
   
    @PrimaryGeneratedColumn()
    taskId: number

    @Column({type: 'varchar'})
    taskName: string

    @Column({type: 'varchar'})
    description: string

    @CreateDateColumn({type: 'datetime'})
    dateCreated: Date

    @Column({type: 'boolean'})
    status:Boolean
    @ManyToOne(()=>User, user=> user.tasks)
    user: User

}
export default Task;