import { Consult } from "src/consults/entities/consult.entity"
import { Pacient } from "src/pacients/entities/pacient.entity"
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class History {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    antecedentes : string

    @Column()
    diagnostico: string
    
    @Column()
    tratamiento: string

    @OneToOne(()=> Pacient,(pacient) => pacient.history)
    pacient: Pacient

    @OneToMany(() => Consult,(consult) => consult.history)
    consultas: Consult[]

}
