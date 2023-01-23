import { Column, Entity } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity()
export class ConfirmationTokenEntity {
   
    @Column()
    user: UserEntity;

    @Column()
    token: string;

    @Column()
    createdAt: Date;
}
