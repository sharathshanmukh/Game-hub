import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState,useEffect } from 'react';
import { Genre } from './hooks/useGenre';


function App() {
  const [selectedGenre,setSelectedGenre]=useState<Genre| null>(null);
   useEffect(() => {
    console.log(selectedGenre);
  }, [selectedGenre]);

  return (
    <Grid

      gridTemplateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"'
      }}
      templateColumns={{base:'1fr',lg:'200px 1fr'}
        
      }
      gap={0}
    >
      <GridItem gridArea="nav"><NavBar></NavBar></GridItem>

      {/* Show 'ASIDE' only on larger screens (lg and above) */}
      <Show above='lg'>
        <GridItem gridArea="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)} selectedGenre={selectedGenre}></GenreList>
        </GridItem>
      </Show>

      <GridItem gridArea="main" bg="">
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
