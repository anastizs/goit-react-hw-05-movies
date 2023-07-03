import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container, Header, Navigation, NavigationLink } from "./SharedLayout.styled";
import { Fallback } from "components/Fallback/Fallback.styled";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <NavigationLink to={"/"}>Популярні </NavigationLink>
            <NavigationLink to={"movies"}>Фільми </NavigationLink>
          </Navigation>
        </Container>
      </Header>
      <Container>
        <Suspense fallback={<Fallback>Завантаження сторінки...</Fallback>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

