import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, JoinTable } from 'typeorm';
import { Album } from '../album/album.entity';
import { Artist } from '../artist/artist.entity';

@ObjectType()
@Entity()
export class Song {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field(() => Int)
  @Column()
  duration: number; 

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  trackNumber?: number;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  lyrics?: string;

  @Field(() => Int)
  @Column({ default: 0 })
  likes: number;

  @Field(() => Album)
  @ManyToOne(() => Album, album => album.songs, { onDelete: 'CASCADE' })
  album: Album;

  @Field(() => [Artist])
  @ManyToMany(() => Artist, artist => artist.songs)
  @JoinTable()
  artists: Artist[];
}
