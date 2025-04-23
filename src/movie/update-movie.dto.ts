import {IsDate, IsOptional, IsString} from "class-validator";


export class UpdateMovieDto {
    @IsOptional()
    @IsString()
    name?: string;
    @IsOptional()
    @IsString()
    description?: string;
    @IsOptional()
    @IsDate()
    releaseDate?: Date;
}