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

    create(movieData) {
        return this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }

    deleteOne(id: string): boolean {
        this.movies = this.movies.filter(movie => movie.id !== +id); //삭제한것 제외한 나머지를 할당함
        return true;
    }

    update(id: string, updateData) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        return this.movies.push({...movie, ...updateData});
    }
}
