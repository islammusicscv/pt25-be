import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DeepPartial, DeleteResult, Repository} from "typeorm";
import {Movie} from "../entities/movie.entity";
import {CreateMovieDto} from "./create-movie.dto";
import {UpdateMovieDto} from "./update-movie.dto";

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movie)
        private readonly movieRepository: Repository<Movie>,
    ) {}

    create(createMovieDto: CreateMovieDto):Promise<Movie> {
        const genre = this.movieRepository.create(createMovieDto as DeepPartial<Movie>);
        return this.movieRepository.save(genre);
    }

    async update(id:number,updateMovieDto:UpdateMovieDto):Promise<Movie | null> {
        await this.movieRepository.update(id,updateMovieDto  as DeepPartial<Movie>);
        return this.movieRepository.findOneBy({id});
    }

    findAll():Promise<Movie[]> {
        return this.movieRepository.find();
    }

    findeOne(id: number):Promise<Movie | null> {
        return this.movieRepository.findOneBy({id})
    }

    delete(id:number):Promise<DeleteResult> {
        return this.movieRepository.delete({id});
    }
}
