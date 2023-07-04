import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

import API from "../../services/API";
import { List, Item, Name, Content } from "./Reviews.styled";
import { Fallback } from "components/Fallback/Fallback.styled";

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const isEmpty = reviews?.length === 0;
  const isLoaded = reviews !== null;

  const hadleFetchReviews = useCallback(async () => {
    const response = await API.reviews(movieId);
    setReviews(response);
  }, [movieId]);

  useEffect(() => {
    hadleFetchReviews();
  }, [hadleFetchReviews]);

  return (
    <List>
      {!isLoaded && <Fallback>Завантаження</Fallback>}
      {isLoaded && isEmpty && <Item>Вибачте, ще немає відгуків</Item>}
      {isLoaded &&
        !isEmpty &&
        reviews.map((review) => (
          <Item key={review.id}>
            <Name>
              <RxAvatar />
              {review.author}
            </Name>
            <Content>{review.content}</Content>
          </Item>
        ))}
    </List>
  );
};
export default Reviews;