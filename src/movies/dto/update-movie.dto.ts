import { IsString, IsNumber } from "class-validator"

export class UpdateMovieDTO {
    @IsNumber()
    readonly year?: number;

    @IsString()
    readonly title?: string;
    
    @IsString({each: true})
    readonly genres?: string[];
}