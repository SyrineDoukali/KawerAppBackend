import { MinLength } from "class-validator";
import { MatchEntity } from "src/match/entities/match.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RolesEnum } from "../enums/user-role.enum";

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
    verifiedEmail: boolean;

    @Column({ enum: RolesEnum, default: RolesEnum.USER })
    role: RolesEnum;

    @OneToMany(type => MatchEntity,
        (match: UserEntity) => match.id)
    matches: MatchEntity[];
}
