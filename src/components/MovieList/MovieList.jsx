import PropTypes from "prop-types";
import { MovieListItem } from "../MovieListItem/MovieListItem";
import { List } from "./MovieList.styled";

export const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map((movie) => (
        <MovieListItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          ></MovieListItem>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
