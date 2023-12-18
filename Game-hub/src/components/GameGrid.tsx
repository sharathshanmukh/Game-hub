import { Text, SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';

const GameGrid = () => {
    const{ game,err}=useGames();

    return (
        <>
        {err && <Text>{err}</Text>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} spacing={10} padding={10}>
            {game.map(g=><GameCard key={g.id} game={g}></GameCard>)}
        </SimpleGrid>
            
        
    // <div>GameGrid</div>
    </>
  )
}

export default GameGrid