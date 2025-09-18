import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateAlbumInput {
  @Field()
  title: string;

  @Field()
  releaseDate: string;

  @Field({ nullable: true })
  genre?: string;

  @Field({ nullable: true })
  coverUrl?: string;

  @Field(() => Int)
  artistId: number;
}
