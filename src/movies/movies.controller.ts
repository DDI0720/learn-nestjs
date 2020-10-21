import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'This return all of the movie lists that we have';
    }

    @Get('/:movieId')
    getOne(@Param('movieId') id: string) {
        return `You want to search '${id}' ?`;
    }

    @Post()
    create() {
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
