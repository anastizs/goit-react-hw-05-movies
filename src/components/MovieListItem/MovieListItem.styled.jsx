import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Item = styled.li`
  display: flex;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;
  transition: box-shadow 300ms ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  padding: 6px;
  margin: 0;
  color: #0f0f0f;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  :hover {
    color: #f30;
    cursor: pointer;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;
export const InfoMain = styled.div`
  height: 100px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: 6px 10px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReleaseDate = styled.p`
  font-size: 12px;
  // margin-bottom: 5px;
  color: #214e50;
`;

export const VoteAverage = styled.p`
  font-size: 12px;
  // margin-bottom: 5px;
  color: #214e50;
`;
