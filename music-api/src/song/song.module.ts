import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './song.entity';
import { SongService } from './song.service';
import { SongResolver } from './song.resolver';
import { Album } from '../album/album.entity';
import { Artist } from '../artist/artist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Song, Album, Artist])],
  providers: [SongService, SongResolver],
})
export class SongModule {}
