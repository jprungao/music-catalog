import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from './artist.entity';
import { ArtistService } from './artist.service';
import { ArtistResolver } from './artist.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Artist])],
  providers: [ArtistService, ArtistResolver],
  exports: [ArtistService],
})
export class ArtistModule {}
