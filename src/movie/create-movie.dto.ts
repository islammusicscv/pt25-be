import {IsDate, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {Type} from "class-transformer";


export class CreateMovieDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    releaseDate?: Date;

    @IsNotEmpty()
    @IsNumber()
    genre:number;
}