import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Artist } from 'src/artist/artist.entity';
import { Song } from 'src/song/song.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Album {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({ type: 'date' })
  releaseDate: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  genre?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  coverUrl?: string;

  @Field(() => Artist)
  @ManyToOne(() => Artist, artist => artist.albums, { onDelete: 'CASCADE' })
  artist: Artist;

  @Field(() => [Song])
  @OneToMany(() => Song, song => song.album)
  songs: Song[];
}
