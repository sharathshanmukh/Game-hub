import React from 'react';
import useGenre from '../hooks/useGenre';

const GenreList = () => {
    const { genre, err, isLoading } = useGenre();
    return (
        <>
        <ul>
            {genre.map(g=>
                <li key={g.id}>{g.name}</li>)}
        </ul>
        </>
    );
};

export default GenreList;
