import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return 'This return all of the movie lists that we have';
    }

    @Get('/:movieId')
    getOne(@Param('movieId') id: string){
        return `You want to search '${id}' ?`;
    }
}
