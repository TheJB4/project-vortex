import { History } from "src/historys/entities/history.entity";
import { Entity,Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Pacient {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string

    @Column()
    lastName: string

    @OneToOne(()=> History)
    @JoinColumn()
    history: History
}
