import { History } from "src/historys/entities/history.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Consult{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column({nullable:true})
    description: string

    @ManyToOne(()=> History, (history) => history.consultas)
    @JoinColumn({name: 'history_id'})
    history: History
}