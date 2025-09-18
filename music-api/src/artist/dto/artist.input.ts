import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateArtistInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  country?: string;

  @Field(() => Int, { nullable: true })
  debutYear?: number;
}
