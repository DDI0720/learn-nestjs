import { Test, TestingModule } from '@nestjs/testing';
import { arrayContains, ArrayNotEmpty, arrayNotEmpty } from 'class-validator';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("getAll()", () => {
    it ("should return array", () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    }) 
  })

  describe("getOne()", () => {
    it("should return a movie", () => {
      service.create({
        title: "movie name",
        genres: ["thriller"],
        year: 2020
      })

      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    })
  })
});
