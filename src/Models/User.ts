import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { Task } from "./Task.js";



@Entity()
export class User{
    @PrimaryGeneratedColumn()
    userId: number;
    
    @Column({type: 'varchar'})
    username: string;

    @Column({type: 'varchar'}) 
    password: string;

   @OneToMany(()=> Task, (task)=>task.user)
   tasks: Task[]
   

   
}
export default User;