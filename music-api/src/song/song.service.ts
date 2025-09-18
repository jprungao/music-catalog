import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Song } from './song.entity';
import { Album } from '../album/album.entity';
import { Artist } from '../artist/artist.entity';
import { CreateSongInput } from './dto/song.dto';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song) private songRepo: Repository<Song>,
    @InjectRepository(Album) private albumRepo: Repository<Album>,
    @InjectRepository(Artist) private artistRepo: Repository<Artist>,
  ) {}

  findAll(): Promise<Song[]> {
    return this.songRepo.find({ relations: ['album', 'artists'] });
  }

  async create(input: CreateSongInput): Promise<Song> {
    const album = await this.albumRepo.findOneBy({ id: input.albumId });
    if (!album) throw new NotFoundException('Album not found');

    const artists = await this.artistRepo.find({
      where: { id: In(input.artistIds) },
    });
    if (!artists.length) throw new NotFoundException('Artists not found');

    const song = this.songRepo.create({
      ...input,
      album,
      artists,
    });

    return this.songRepo.save(song);
  }

  async likeSong(id: number): Promise<Song> {
    const song = await this.songRepo.findOneBy({ id });
    if (!song) throw new NotFoundException('Song not found');

    song.likes++;
    return this.songRepo.save(song);
  }
}
