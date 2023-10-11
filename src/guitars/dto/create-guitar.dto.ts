import { IsArray, IsNumber, IsString, Min, MinLength } from "class-validator"

export class CreateGuitarDto {

    @IsString()
    @MinLength(1)
    color: string


    @IsString()
    @MinLength(1)
    model: string

    @IsNumber()
    @Min(1)
    price: number

    @IsArray()
    pickupTypes: string[]
}
