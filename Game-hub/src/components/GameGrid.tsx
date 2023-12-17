import { Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'

const GameGrid = () => {
    const{ game,err}=useGames();

    return (
        <>
        {err && <Text>{err}</Text>}
        <ul>
            {game.map(g=><li key={g.id}>{g.name}</li>)}
        </ul>
    // <div>GameGrid</div>
    </>
  )
}

export default GameGrid