import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
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
    getOne(@Param('movieId') id: string): Movie {
        const movie = this.moviesService.getOne(id);
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} is not found`);
        }
        return movie;
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData);
        return this.moviesService.create(movieData);
    }

    @Delete('/:movieId')
    delete(@Param('movieId') id: string) {
        return this.moviesService.deleteOne(id);
    }

    @Patch('/:movieId') //updates specific resource (<-> Put: updates whole resources)
    patch(@Param('movieId') id: string) {
        return `This patches a movie with the Id ${id}`;
    }
}
