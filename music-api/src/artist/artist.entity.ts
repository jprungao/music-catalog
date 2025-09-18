import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Album } from 'src/album/album.entity';
import { Song } from 'src/song/song.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Artist {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  country?: string;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  debutYear?: number;

  @Field(() => [Album])
  @OneToMany(() => Album, album => album.artist)
  albums: Album[];

  @Field(() => [Song])
  @ManyToMany(() => Song, song => song.artists)
  songs: Song[];
}
