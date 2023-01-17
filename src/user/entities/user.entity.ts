import { MinLength } from "class-validator";
import { MatchEntity } from "src/match/entities/match.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => MatchEntity, match => match.user)
    matches: MatchEntity[];
}
