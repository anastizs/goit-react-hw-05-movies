import { FadeLoader } from "react-spinners";

import { Spiner } from "./Loader.styled";

export default function Loader() {
  return (
    <Spiner>
      <FadeLoader color="#6317a1" size="50px" />
    </Spiner>
  );
}
