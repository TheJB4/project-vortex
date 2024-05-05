import { Pacient } from "src/pacients/entities/pacient.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doctor {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string 

    @Column()
    lastName:string 

    @Column()
    specialty: string 

    @ManyToMany(()=> Pacient, (pacient) => pacient.doctors)
    @JoinTable({name: 'doctors_pacients'})
    pacients: Pacient[]
}
