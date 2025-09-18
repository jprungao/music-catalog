import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from './artist.entity';
import { CreateArtistInput } from './dto/artist.input';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(Artist) private artistRepo: Repository<Artist>,
  ) {}

  findAll(): Promise<Artist[]> {
    return this.artistRepo.find({ relations: ['albums', 'songs'] });
  }

  create(input: CreateArtistInput): Promise<Artist> {
    const artist = this.artistRepo.create(input);
    return this.artistRepo.save(artist);
  }
}
