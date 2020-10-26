import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string): Movie {
        return this.movies.find(movie => movie.id === parseInt(id));
    }

    deleteOne(id: string): boolean {
        this.movies.filter(movie => movie.id !== +id); //삭제한것 제외한 나머지를 보여줌
        return true;
    }
}
