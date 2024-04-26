import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pacient {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string

    @Column()
    lastName: string
}
