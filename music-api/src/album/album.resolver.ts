import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Album } from './album.entity';
import { CreateAlbumInput } from './dto/album.input';
import { AlbumService } from './album.service';

@Resolver(() => Album)
export class AlbumResolver {
  constructor(private readonly albumService: AlbumService) {}

  @Query(() => [Album])
  albums(): Promise<Album[]> {
    return this.albumService.findAll();
  }

  @Mutation(() => Album)
  createAlbum(@Args('input') input: CreateAlbumInput): Promise<Album> {
    return this.albumService.create(input);
  }
}
