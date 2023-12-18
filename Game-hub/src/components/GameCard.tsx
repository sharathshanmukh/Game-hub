import React from 'react'
import { Game } from '../hooks/useGames'
import { Card , Image, Heading, CardBody,Text} from '@chakra-ui/react'
import PlatformiconList from './PlatformiconList'
interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card>
        <Image src={game.background_image} borderRadius={10} overflow='hidden'/>
        <CardBody>
            <Heading fontSize='2xl'> {game.name}</Heading>
            {/* {game.parent_platforms.map(({platform})=><Text>{platform.name}</Text>)} */}
            <PlatformiconList platform={game.parent_platforms.map(p=>(p.platform))}></PlatformiconList>
        </CardBody>

    </Card>
  )
}

export default GameCard