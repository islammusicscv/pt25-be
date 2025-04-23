import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {MovieService} from "./movie.service";
import {DeleteResult} from "typeorm";
import {Movie} from "../entities/movie.entity";
import {CreateMovieDto} from "./create-movie.dto";
import {UpdateMovieDto} from "./update-movie.dto";

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Post()
    create(@Body() createMovieDto: CreateMovieDto):Promise<Movie> {
        return this.movieService.create(createMovieDto);
    }

    @Patch(':id')
    update(@Param('id') id: string,@Body() updateMovieDto: UpdateMovieDto):Promise<Movie | null> {
        return this.movieService.update(+id, updateMovieDto);
    }

    @Get()
    findAll():Promise<Movie[]> {
        return this.movieService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Movie | null> {
        return this.movieService.findeOne(+id);
    }

    @Delete(':id')
    delete(@Param('id') id: string):Promise<DeleteResult> {
        return this.movieService.delete(+id);
    }
}
