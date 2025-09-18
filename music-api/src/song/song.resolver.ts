import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Song } from './song.entity';
import { SongService } from './song.service';
import { CreateSongInput } from './dto/song.dto';

@Resolver(() => Song)
export class SongResolver {
  constructor(private readonly songService: SongService) {}

  @Mutation(() => Song)
  createSong(@Args('input') input: CreateSongInput): Promise<Song> {
    return this.songService.create(input);
  }

  @Query(() => [Song])
  songs(): Promise<Song[]> {
    return this.songService.findAll();
  }

  @Mutation(() => Song)
  likeSong(@Args('id', { type: () => Int }) id: number): Promise<Song> {
    return this.songService.likeSong(id);
  }
}
