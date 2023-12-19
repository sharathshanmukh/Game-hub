import { Text } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre';

const GenreList = () => {
    const { data, err, isLoading } = useGenre();
    return (
        <>
                {err && <Text>{err}</Text>}

        <ul>
            {data.map(g=>
                <li key={g.id}>{g.name}</li>)}
        </ul>
        </>
    );
};

export default GenreList;
