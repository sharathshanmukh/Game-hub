import { Grid, GridItem, Show,HStack,Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenre';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery{
  genre:Genre |null,
  platform:Platform| null,
  sort_order:string,
  searchText:string,

}
function App() {
  // const [selectedGenre,setSelectedGenre]=useState<Genre| null>(null);
  // const [selectedPlatform,setSelectedPlatform]=useState<Platform | null>(null);
  // const[gamequery,SetGamequery]=useState<GameQuery>({} as GameQuery)
  const [gamequery, setGamequery] = useState<GameQuery>({ genre: null, platform: null,sort_order:"",searchText:"" });

  //  useEffect(() => {
  //   console.log(selectedGenre);
  // }, [selectedGenre]);

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
      <GridItem gridArea="nav"><NavBar onsearch={(searchText:string)=>{setGamequery({...gamequery,searchText})}}></NavBar></GridItem>

      {/* Show 'ASIDE' only on larger screens (lg and above) */}
      <Show above='lg'>
        <GridItem gridArea="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre)=>setGamequery({...gamequery,genre})} selectedGenre={gamequery.genre}></GenreList>
        </GridItem>
      </Show>

      <GridItem gridArea="main" bg="">
        <Box>
          <GameHeading gameQuery={gamequery}></GameHeading>
                <HStack justify='centre' spacing={5} marginBottom='2px' paddingLeft={10}>
          <PlatformSelector splat={gamequery.platform} onselectPlatform={(platform)=>setGamequery({...gamequery,platform})}></PlatformSelector>
          <SortSelector selected= {gamequery.sort_order}sortSel={(sort_order)=>setGamequery({...gamequery,sort_order})}></SortSelector>
          </HStack>
        </Box>

        <GameGrid gameQuery={gamequery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
