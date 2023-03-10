import { MatchEntity } from "src/match/entities/match.entity";
import { Column, Double, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FieldEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    ownerphonenumber: string;

    @Column()
    price: number;

    @Column({default: 90})
    duratingInMinutes: number;

    @Column()
    location: string;

    @Column()
    capacity: number;

    @Column()
    availableTimeslots: Date[];

   
    @OneToMany(() => MatchEntity, match => match.field)
    matches: MatchEntity[];
}
