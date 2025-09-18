import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { Artist } from '../artist/artist.entity';
import { AlbumService } from './album.service';
import { AlbumResolver } from './album.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Album, Artist])],
  providers: [AlbumService, AlbumResolver],
  exports: [AlbumService],
})
export class AlbumModule {}
