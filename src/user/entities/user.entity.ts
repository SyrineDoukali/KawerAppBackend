import { MinLength } from "class-validator";
import { MatchEntity } from "src/match/entities/match.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({ unique: true })
    email: string;

    @Column()
    @MinLength(8)
    password: string;

    @Column()
    phonenumber: string;

    @Column()
    matches: MatchEntity[];
}
