// types/graphql.ts

export interface Artist {
  id: number;
  name: string;
}

export interface Album {
  id: number;
  title: string;
}

export interface Song {
  id: number;
  likes: number;
  title: string;
  duration: number;
  album: Album;
  artists: Artist[];
}

export interface GetSongsResponse {
  songs: Song[];
}

export interface LikeSongResponse {
  likeSong: Song;
}

export interface LikeSongVariables {
  id: number;
}
