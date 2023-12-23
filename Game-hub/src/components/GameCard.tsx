import { Game } from '../hooks/useGames'
import { Card , Image, Heading, CardBody,HStack,} from '@chakra-ui/react'
import PlatformiconList from './PlatformiconList'
import CriticScore from './CriticScore'
import { getCroppedImageUrl } from '../services/image-url'
import Emoji from './Emoji'

interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card >
        <Image src={getCroppedImageUrl(game.background_image)} borderRadius={10} overflow='hidden'/>
        <CardBody>
            
            <HStack marginBottom={3}justifyContent={'space-between'}> <PlatformiconList platform={game.parent_platforms.map(p=>(p.platform))}></PlatformiconList>
            <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            <Heading fontSize='2xl'> {game.name}
            <Emoji rating={game.rating_top}/>
            </Heading>
            {/* {game.parent_platforms.map(({platform})=><Text>{platform.name}</Text>)} */}

        </CardBody>

    </Card>
  )
}

export default GameCard