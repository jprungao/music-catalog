import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Artist } from './artist.entity';
import { ArtistService } from './artist.service';
import { CreateArtistInput } from './dto/artist.input';

@Resolver(() => Artist)
export class ArtistResolver {
  constructor(private readonly artistService: ArtistService) {}

  @Query(() => [Artist])
  artists(): Promise<Artist[]> {
    return this.artistService.findAll();
  }

  @Mutation(() => Artist)
  createArtist(@Args('input') input: CreateArtistInput): Promise<Artist> {
    return this.artistService.create(input);
  }
}
