import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import {
  Item,
  Title,
  MovieLink,
  InfoMain,
  Info,
  ReleaseDate,
  VoteAverage,
} from "./MovieListItem.styled";

export const MovieListItem = ({
  title,
  poster,
  id,
  release_date,
  vote_average,
}) => {
  const location = useLocation();
  const imgBaseUrl = "https://image.tmdb.org/t/p/w342/";

  return (
    <Item>
      <MovieLink to={`/movies/${id}`} state={{ from: location }}>
        <img src={`${imgBaseUrl}${poster}`} alt={title} />
        <InfoMain>
          <Title>{title}</Title>
          <Info>
            <ReleaseDate>Рік {release_date?.slice(0, 4)}</ReleaseDate>
            <VoteAverage>Рейтинг {vote_average}</VoteAverage>
          </Info>
        </InfoMain>
      </MovieLink>
    </Item>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
