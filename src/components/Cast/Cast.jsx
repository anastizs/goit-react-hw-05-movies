import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import API from '../../services/API';
import { Item, List, Name, Character } from './Cast.styled';
import { Fallback } from '../Fallback/Fallback.styled';

export const Cast=()=> {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    const isEmpty = cast?.length === 0;
    const isLoaded = cast !== null;

    const hadleFetchCast = useCallback(async () => {
        const response = await API.cast(movieId);
        setCast(response);
    }, [movieId]);

    useEffect(() => {
        hadleFetchCast();
    }, [hadleFetchCast]);

    return (
        <List>
            {!isLoaded && <Fallback>Loading</Fallback>}
            {isLoaded && isEmpty && (
                <Item>Sorry, there is no information about the cast</Item>
            )}
            {isLoaded &&
                !isEmpty &&
                cast.slice(0, 10).map(cast => (
                    <Item key={cast.id}>
                        <img src={`https://image.tmdb.org/t/p/w45/${cast.profile_path}`} alt={cast.name} />
                        <div>
                            <Name>{cast.name}</Name>
                            <Character>{cast.character}</Character>
                        </div>
                    </Item>
                ))}
        </List>
    );
}