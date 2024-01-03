import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn} from "typeorm"



@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar'})
    name: string 



}