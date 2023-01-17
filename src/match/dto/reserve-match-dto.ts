import { IsNotEmpty } from "class-validator";
import { FieldEntity } from "src/field/entities/field.entity";
import { UserEntity } from "src/user/entities/user.entity";

export class ReserveMatchDto {
    @IsNotEmpty()
    start: Date

    @IsNotEmpty()
    finish: Date;

    @IsNotEmpty()
    field: FieldEntity;

    @IsNotEmpty()
    user: UserEntity;
}
