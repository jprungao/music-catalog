import { gql } from "@apollo/client";

export const GET_SONGS = gql`
  query {
    songs {
      id
      title
      duration
      likes
      album {
        title
      }
      artists {
        name
      }
    }
  }
`;

export const LIKE_SONG = gql`
  mutation LikeSong($id: Int!) {
    likeSong(id: $id) {
      id
      title
    }
  }
`;
