import { Text ,List,ListItem,HStack,Image,Spinner,Button,Heading} from '@chakra-ui/react'
import useGenre from '../hooks/useGenre';
import { getCroppedImageUrl } from '../services/image-url';
import { Genre } from '../hooks/useGenre';
interface Props{
    onSelectGenre:(genre:Genre)=>void,
    selectedGenre:Genre |null,
}
const GenreList = ({onSelectGenre,selectedGenre}:Props) => {
    const { data, err, isLoading } = useGenre();
    return (
        <>
                <Heading fontSize={20}>Genres</Heading>
                {err && <Text>{err}</Text>}
                {isLoading && <Spinner/>}

        
            <List>
                {data.map(g=>
                    <ListItem key={g.id}>
                        <HStack paddingY='5px'>
                        <Image boxSize='32px' objectFit={'cover'} borderRadius={8} src={getCroppedImageUrl(g.image_background)}/>
                        <Button whiteSpace={'normal'} textAlign="left" fontWeight={g.id===selectedGenre?.id ? 'bold': 'null'} onClick={()=>onSelectGenre(g)}variant='link'  fontSize='lg'>{g.name}</Button>
                        </HStack>
                        </ListItem>)}
            </List>
        
        </>
    );
};

export default GenreList;
