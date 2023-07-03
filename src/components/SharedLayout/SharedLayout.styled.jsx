import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 12px;
`;

export const Header = styled.header`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  background-color: #1a1a1a;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  padding-left: 20px;
`;
export const NavigationLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #fff;

  &.active {
    color: #f60;
  }
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 4px;
    background-color: #f60;
    bottom: -5px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
  }
  :hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;
