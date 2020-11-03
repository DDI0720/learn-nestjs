import { Injectable } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie {
        return this.movies.find(movie => movie.id === id);
    }

    create(movieData: CreateMovieDTO) {
        return this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }

    deleteOne(id: number): boolean {
        this.movies = this.movies.filter(movie => movie.id !== +id); //삭제한것 제외한 나머지를 할당함
        return true;
    }

    update(id: number, updateData: UpdateMovieDTO) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        return this.movies.push({...movie, ...updateData});
    }
}
