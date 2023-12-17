import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';

function App() {
  return (
    <Grid
      templateRows="repeat(2,1fr)"
      templateColumns="repeat(2,1fr)"
      gridTemplateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"'
      }}
      gap={0}
    >
      <GridItem gridArea="nav"><NavBar></NavBar></GridItem>

      {/* Show 'ASIDE' only on larger screens (lg and above) */}
      <Show above='lg'>
        <GridItem gridArea="aside" bg="gold">ASIDE</GridItem>
      </Show>

      <GridItem gridArea="main" bg="dodgerblue">MAIN</GridItem>
    </Grid>
  );
}

export default App;
