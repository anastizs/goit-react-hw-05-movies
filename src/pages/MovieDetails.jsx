import { useState, useCallback, useEffect, Suspense } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

import API from "../services/API";
import {
  MainWrapper,
  ButtonWrapper,
  Title,
  SubTitle,
  Text,
  Button,
} from "./MovieDetails.styled";
import { Fallback } from "components/Fallback/Fallback.styled";
import detailsplaceholder from "../images/details-placeholder.jpg";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const [movie, setMovie] = useState(null);

  const hadleFetchDetails = useCallback(async () => {
    const response = await API.details(movieId);

    setMovie(response);
  }, [movieId, setMovie]);

  const imgBaseUrl = "https://image.tmdb.org/t/p/w300/";

  useEffect(() => {
    hadleFetchDetails();
  }, [hadleFetchDetails]);
  return (
    <>
      <Button to={backLinkHref}>
        <MdKeyboardBackspace size="20px" />
        Назад
      </Button>
      {!movie && <Title>Завантаження</Title>}
      {movie && (
        <>
          <MainWrapper>
            {movie.poster_path ? (
              <img
                src={`${imgBaseUrl}${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <img src={`${detailsplaceholder}`} alt={movie.title} />
            )}

            <div>
              <Title>{`${movie.title} (${movie.release_date?.slice(
                0,
                4
              )})`}</Title>
              <SubTitle>{movie.tagline}</SubTitle>
              <Text>{`Рейтинг користувачів: ${
                movie.vote_average !== 0.0
                  ? `${Math.floor(movie.vote_average * 10)}%`
                  : "no ratings yet"
              }`}</Text>
              <SubTitle>ОПИС</SubTitle>
              <Text>{movie.overview}</Text>
              <SubTitle>ЖАНРИ</SubTitle>
              <Text>{movie.genres.map((genre) => genre.name).join(", ")}</Text>
            </div>
          </MainWrapper>
          <ButtonWrapper>
            <Button to="cast" state={{ from: backLinkHref }}>
              АКТОРИ
            </Button>
            <Button to="reviews" state={{ from: backLinkHref }}>
              ВІДГУКИ
            </Button>
          </ButtonWrapper>
        </>
      )}
      <Suspense fallback={<Fallback>Будь ласка, зачекайте</Fallback>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;