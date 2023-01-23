import { IsNotEmpty } from "class-validator";
import { RolesEnum } from "../enums/user-role.enum";

export class AddUserDto {

    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    phonenumber: string;

    @IsNotEmpty()
    role: RolesEnum;

}
