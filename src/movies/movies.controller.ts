import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'This return all of the movie lists that we have';
    }

    @Get('search')
    search(@Query('year') searchingYear: string) {
        return `You are searching for movies made after: ${searchingYear} `;
    }

    @Get('/:movieId')
    getOne(@Param('movieId') id: string) {
        return `You want to search '${id}' ?`;
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
