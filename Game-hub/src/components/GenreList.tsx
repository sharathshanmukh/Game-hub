import { Text ,List,ListItem,HStack,Image,Spinner} from '@chakra-ui/react'
import useGenre from '../hooks/useGenre';
import { getCroppedImageUrl } from '../services/image-url';

const GenreList = () => {
    const { data, err, isLoading } = useGenre();
    return (
        <>
                {err && <Text>{err}</Text>}
                {isLoading && <Spinner/>}

        
            <List>
                {data.map(g=>
                    <ListItem key={g.id}>
                        <HStack paddingY='5px'>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(g.image_background)}/>
                        <Text fontSize='lg'>{g.name}</Text>
                        </HStack>
                        </ListItem>)}
            </List>
        
        </>
    );
};

export default GenreList;
