import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(readonly moviesService: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get('search')
    search(@Query('year') searchingYear: string) {
        return `You are searching for movies made after: ${searchingYear} `;
    }

    @Get('/:movieId')
    getOne(@Param('movieId') id: number): Movie {
        const movie = this.moviesService.getOne(id);
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} is not found`);
        }
        return movie;
    }

    @Post()
    create(@Body() movieData: CreateMovieDTO) {
        console.log(movieData);
        return this.moviesService.create(movieData);
    }

    @Delete('/:movieId')
    delete(@Param('movieId') id: number) {
        this.getOne(id);
        this.moviesService.deleteOne(id);
        return true;
    }

    @Patch('/:movieId') //updates specific resource (<-> Put: updates whole resources)
    patch(@Param('movieId') id: number, updateData: UpdateMovieDTO) {
        return this.moviesService.update(id, updateData);
    }
}
