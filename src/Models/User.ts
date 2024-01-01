import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm"
import { Task } from "./Task.js"

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    userId: number 
    
    @Column({type: 'varchar'})
    username: string 

    @Column({type: 'varchar'}) 
    password: string 
    
     constructor(username: string, password: string){
        this.username = username, 
        this.password= password

    }
}
export default User