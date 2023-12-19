import React from 'react'
import { Game } from '../hooks/useGames'
import { Card , Image, Heading, CardBody,HStack, Badge} from '@chakra-ui/react'
import PlatformiconList from './PlatformiconList'
import CriticScore from './CriticScore'
import { getCroppedImageUrl } from '../services/image-url'

interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card width='300px'>
        <Image src={getCroppedImageUrl(game.background_image)} borderRadius={10} overflow='hidden'/>
        <CardBody>
            <Heading fontSize='2xl'> {game.name}</Heading>
            <HStack justifyContent={'space-between'}> <PlatformiconList platform={game.parent_platforms.map(p=>(p.platform))}></PlatformiconList>
            <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            {/* {game.parent_platforms.map(({platform})=><Text>{platform.name}</Text>)} */}

        </CardBody>

    </Card>
  )
}

export default GameCard