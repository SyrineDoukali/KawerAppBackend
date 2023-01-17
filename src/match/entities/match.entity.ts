import { FieldEntity } from "src/field/entities/field.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MatchEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    start: Date

    @Column()
    finish: Date;

    @Column()
    field: FieldEntity;
    
}
