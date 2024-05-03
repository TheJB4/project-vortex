import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Consult{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column()
    description: string

    @OneToOne(()=> History)
    @JoinColumn()
    history: History
}