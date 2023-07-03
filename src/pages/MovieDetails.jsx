import { useState, useCallback, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';

import API from '../services/API';
import {
    MainWrapper,
    ButtonWrapper,
    Title,
    SubTitle,
    Text,
    Button,
} from './MovieDetails.styled';
import { Fallback } from 'components/Fallback/Fallback.styled';

export const MovieDetails=() =>{
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await API.details(movieId);
                setMovie(response);
                setGenres(response.genres.map(genre => genre.name));
            } catch (error) {
                setError('Ошибка при получении информации о фильме');
            }
        };
        fetchMovie();
    }, [movieId]);

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <>
            <Button to={backLinkHref}>
                <MdKeyboardBackspace size="20px" />
                Go back
            </Button>
            {!movie && <Title>Loading</Title>}
            {movie && (
                <>
                    <MainWrapper>
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
                        <div>
                            <Title>{`${movie.title} (${movie.year})`}</Title>
                            <Text>{`User Score: ${movie.userScore}`}</Text>
                            <SubTitle>Overview</SubTitle>
                            <Text>{movie.overview}</Text>
                            <SubTitle>Genres</SubTitle>
                            {/* <Text>{movie.genres}</Text> */}
                        </div>
                    </MainWrapper>
                    <ButtonWrapper>
                        <Button to="cast" state={{ from: backLinkHref }}>
                            Cast
                        </Button>
                        <Button to="reviews" state={{ from: backLinkHref }}>
                            Reviews
                        </Button>
                    </ButtonWrapper>
                </>
            )}
            <Suspense fallback={<Fallback>Please wait</Fallback>}>
                <Outlet />
            </Suspense>
        </>
    );
}