import { Text, SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Props{
    gameQuery:GameQuery ;
}
const GameGrid = ({gameQuery}:Props) => {
    const{ data,err,isLoading}=useGames(gameQuery);
    const skltn=[1,2,3,4,5,6,7,8,9]
    if (err) return <Text>{err}</Text>;
    return (
        <>
        
        {isLoading &&         <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} spacing={10} padding={10}>
{skltn.map(s => 
    (
        <GameCardContainer key={s}><GameCardSkeleton  /></GameCardContainer>
    
    ))}</SimpleGrid>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} spacing={6} padding={10}>
           
            {data.map(g=>
            <GameCard key={g.id} game={g}></GameCard>
            )}
        </SimpleGrid>
            
        
    </>
  )
}

export default GameGrid