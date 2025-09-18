import { useMutation, useQuery } from "@apollo/client/react";
import { GET_SONGS, LIKE_SONG } from "../graphql/queries";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import type {
  GetSongsResponse,
  LikeSongResponse,
  LikeSongVariables,
} from "../types/graphql";

export default function SongList() {
  const { loading, error, data, refetch } =
    useQuery<GetSongsResponse>(GET_SONGS);
  const [likeSong] = useMutation<LikeSongResponse, LikeSongVariables>(
    LIKE_SONG
  );


  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">Error loading songs</Text>;

  const handleLike = async (id: number) => {
    try {
      await likeSong({ variables: { id } });
      refetch();
    } catch {}
  };

  return (
    <VStack wordSpacing={4} align="stretch">
      <Flex gap={"6"}>
        {data?.songs.map((song) => (
          <Box
            background={"white"}
            key={song.id}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            shadow="md"
          >
            <Flex justify="space-between" align="center">
              <Box p="4" spaceY="2">
                <Heading size="md">{song.title}</Heading>
                <HStack gap="1" fontWeight="medium">
                  <Text>
                    {song.album?.title} —{" "}
                    {song.artists.map((a: any) => a.name).join(", ")}
                  </Text>
                </HStack>
                <HStack>
                  <Text fontSize="sm" color="gray.500">
                    duration: {song.duration}s
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    likes: {song.likes}
                  </Text>
                </HStack>
                <Button
                  display={"block"}
                  colorPalette={"black"}
                  bgColor={"black"}
                  variant={"solid"}
                  onClick={() => handleLike(song.id)}
                >
                  Like
                </Button>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </VStack>
  );
}
