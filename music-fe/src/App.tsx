import { Container, Heading } from "@chakra-ui/react";
import SongList from "./components/SongList";
import './App.css'

function App() {
  return (
    <Container maxW="container.md" py={8}>
      <Heading mb={6} color={"white"}>🎵 Music Catalog</Heading>
      <SongList />
    </Container>
  );
}

export default App;
