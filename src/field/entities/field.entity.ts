import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
