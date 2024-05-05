import { Doctor } from "src/doctor/entities/doctor.entity";
import { History } from "src/historys/entities/history.entity";
import { Entity,Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany } from "typeorm";

@Entity()
export class Pacient {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string

    @Column()
    lastName: string

    @OneToOne(()=> History,(history) => history.pacient)
    @JoinColumn()
    history: History

    @ManyToMany(()=> Doctor, (doctor) => doctor.pacients,{cascade:true})
    doctors: Doctor[]

}
