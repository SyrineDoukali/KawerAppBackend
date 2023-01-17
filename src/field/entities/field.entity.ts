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

    @Column()
    duratingInMinutes: number;

    @Column()
    location: string;

    @Column()
    capacity: number;

   
    @OneToMany(() => MatchEntity, match => match.field)
    matches: MatchEntity[];
}
