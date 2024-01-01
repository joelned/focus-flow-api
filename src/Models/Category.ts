import e from "express"
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm"
import { Task} from "./Task.js"

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar'})
    name: string 

   

}