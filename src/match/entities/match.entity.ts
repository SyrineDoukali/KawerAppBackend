import { FieldEntity } from "src/field/entities/field.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MatchEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    start: Date

    @Column()
    finish: Date;


    @ManyToOne(() => FieldEntity, field => field.matches)
    field: FieldEntity;

    @ManyToOne(() => UserEntity, user => user.matches)
    user: UserEntity;
    
}
