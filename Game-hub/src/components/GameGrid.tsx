import { Text, SimpleGrid, Skeleton } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
    const{ game,err,isLoading}=useGames();
    const skltn=[1,2,3,4,5,6,7,8,9]

    return (
        <>
        {err && <Text>{err}</Text>}
        {isLoading &&         <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} spacing={10} padding={10}>
{skltn.map(s => (<GameCardSkeleton key={s} />))}</SimpleGrid>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} spacing={10} padding={10}>
            {game.map(g=><GameCard key={g.id} game={g}></GameCard>)}
        </SimpleGrid>
            
        
    // <div>GameGrid</div>
    </>
  )
}

export default GameGrid