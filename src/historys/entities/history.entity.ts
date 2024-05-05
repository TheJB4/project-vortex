import { Consult } from "src/consults/entities/consult.entity"
import { Pacient } from "src/pacients/entities/pacient.entity"
import { Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class History {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    antecedentes : string

    @Column({nullable: true})
    diagnostico: string
    
    @Column({nullable: true})
    tratamiento: string

    @OneToOne(()=> Pacient,(pacient) => pacient.history,{cascade:true})
    @JoinTable()
    pacient: Pacient

    @OneToMany(() => Consult,(consult) => consult.history,{cascade:true})
    consultas: Consult[]

}
