import { NotFoundException } from '@nestjs/common';
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
    });

    it("should return 404 error", () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    })
  });


  describe("delete", () => {
    it("should delete a movie", () => {
      service.create({
        title: 'delete test',
        genres: ['nono'],
        year: 2020
      });

      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;

      expect(afterDelete).toBeLessThan(beforeDelete);
    })
  });
});
