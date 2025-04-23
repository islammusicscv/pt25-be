import {IsDate, IsNotEmpty, IsOptional, IsString} from "class-validator";


export class CreateMovieDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsDate()
    releaseDate?: Date;
}