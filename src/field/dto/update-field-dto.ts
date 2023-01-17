import { IsOptional } from "class-validator";

export class UpdateFieldDto {
    @IsOptional()
    name: string;

    @IsOptional()
    ownerphonenumber: string;

    @IsOptional()
    price: number;

    @IsOptional()
    duratingInMinutes: number;

    @IsOptional()
    location: string;

    @IsOptional()
    capacity: number;
}

