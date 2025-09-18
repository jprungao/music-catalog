import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './album.entity';
import { CreateAlbumInput } from './dto/album.input';
import { Artist } from '../artist/artist.entity';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album) private albumRepo: Repository<Album>,
    @InjectRepository(Artist) private artistRepo: Repository<Artist>,
  ) {}

  findAll(): Promise<Album[]> {
    return this.albumRepo.find({ relations: ['artist', 'songs'] });
  }

  async create(input: CreateAlbumInput): Promise<Album> {
    const artist = await this.artistRepo.findOneBy({ id: input.artistId });
    if (!artist) throw new NotFoundException('Artist not found');

    const album = this.albumRepo.create({
      ...input,
      artist,
    });

    return this.albumRepo.save(album);
  }
}
