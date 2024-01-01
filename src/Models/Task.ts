import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn}from "typeorm"
import {Category} from "./Category.js"
import { User } from "./User.js"


@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    taskId: number

    @Column({type: 'varchar'})
    taskName: string

    @Column({type: 'varchar'})
    description: string

    constructor(taskName: string, description: string){
        this.taskName = taskName, 
        this.description = description
    }
}