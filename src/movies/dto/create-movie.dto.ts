import { IsString, IsNumber, IsOptional } from "class-validator"

export class CreateMovieDTO {
    @IsNumber()
    readonly year: number;

    @IsString()
    readonly title: string;
    
    @IsOptional()
    @IsString({each: true})
    readonly genres: string[];
}