import { Text, SimpleGrid, Skeleton } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenre';
interface Props{
    selectedGenre:Genre | null;
}
const GameGrid = ({selectedGenre}:Props) => {
    const{ data,err,isLoading}=useGames(selectedGenre);
    const skltn=[1,2,3,4,5,6,7,8,9]

    return (
        <>
        {err && <Text>{err}</Text>}
        {isLoading &&         <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} spacing={10} padding={10}>
{skltn.map(s => 
    (
        <GameCardContainer key={s}><GameCardSkeleton  /></GameCardContainer>
    
    ))}</SimpleGrid>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} spacing={10} padding={10}>
           
            {data.map(g=>
            <GameCard key={g.id} game={g}></GameCard>
            )}
        </SimpleGrid>
            
        
    // <div>GameGrid</div>
    </>
  )
}

export default GameGrid