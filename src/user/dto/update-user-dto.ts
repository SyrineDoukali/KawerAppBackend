import { IsOptional } from "class-validator";

export class UpdateUserDto {

    @IsOptional()
    firstname: string;

    @IsOptional()
    lastname: string;

    @IsOptional()
    email: string;

    @IsOptional()
    phonenumber: string;
}
