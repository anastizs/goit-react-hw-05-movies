import { Routes, Route, Navigate } from "react-router-dom";
import {Home} from "../../pages/Home";
import {Movies} from "../../pages/Movies";
import {MovieDetails} from "../../pages/MovieDetails";

import SharedLayout from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route> */}
        </Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Route>
    </Routes>
  );
};