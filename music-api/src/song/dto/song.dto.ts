import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateSongInput {
  @Field()
  title: string;

  @Field(() => Int)
  duration: number;

  @Field(() => Int, { nullable: true })
  trackNumber?: number;

  @Field({ nullable: true })
  lyrics?: string;

  @Field(() => Int)
  albumId: number;

  @Field(() => [Int])
  artistIds: number[];
}
