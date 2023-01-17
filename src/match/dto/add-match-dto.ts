import { IsNotEmpty } from "class-validator";
import { FieldEntity } from "src/field/entities/field.entity";

export class AddMatchDto {

    @IsNotEmpty()
    start: Date

    @IsNotEmpty()
    finish: Date;

    @IsNotEmpty()
    field: FieldEntity;
}
