import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Genre} from "./genre.entity";

@Entity('movies')
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({nullable: true})
    description: string;
    @Column({nullable: true})
    releaseDate: Date;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @ManyToOne(()=>Genre, (genre) => genre.movies, { eager: true, nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({name: 'genre_id'})
    genre: Genre;
}