import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
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
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData);
        return 'This will create a movie';
    }

    @Delete('/:movieId')
    delete(@Param('movieId') id: string) {
        return `This removes a movie with the Id ${id}`;
    }

    @Patch('/:movieId') //updates specific resource (<-> Put: updates whole resources)
    patch(@Param('movieId') id: string) {
        return `This patches a movie with the Id ${id}`;
    }
}
