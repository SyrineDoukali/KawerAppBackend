import { IsNotEmpty } from "class-validator";

export class AddFieldDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    ownerphonenumber: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    duratingInMinutes: number;

    @IsNotEmpty()
    location: string;

    @IsNotEmpty()
    capacity: number;
    
    @IsNotEmpty()
    availableTimeSlots: Date[];

}
