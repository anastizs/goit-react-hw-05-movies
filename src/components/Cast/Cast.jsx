import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import API from "../../services/API";
import { Item, List, Name, Character } from "./Cast.styled";
import { Fallback } from "../Fallback/Fallback.styled";
import castplaceholder from "../../images/cast-placeholder.jpg";

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const isEmpty = cast?.length === 0;
  const isLoaded = cast !== null;

  const hadleFetchCast = useCallback(async () => {
    const response = await API.cast(movieId);
    setCast(response);
  }, [movieId]);
  const imgBaseUrl = "https://image.tmdb.org/t/p/w45/";

  useEffect(() => {
    hadleFetchCast();
  }, [hadleFetchCast]);

  return (
    <List>
      {!isLoaded && <Fallback>Завантаження</Fallback>}
      {isLoaded && isEmpty && (
        <Item>На жаль, інформації про акторський склад немає</Item>
      )}
      {isLoaded &&
        !isEmpty &&
        cast.slice(0, 10).map((cast) => (
          <Item key={cast.id}>
            {cast.profile_path ? (
              <img src={`${imgBaseUrl}${cast.profile_path}`} alt={cast.name} />
            ) : (
              <img src={`${castplaceholder}`} alt={cast.name} />
            )}

            <div>
              <Name>{cast.name}</Name>
              <Character>{cast.character}</Character>
            </div>
          </Item>
        ))}
    </List>
  );
};
export default Cast;