import { NotFoundContainer } from "./styles";

import notFound from "../../../../assets/not-found.svg";

function NotFound() {
  return (
    <NotFoundContainer>
      <img src={notFound} alt="Not Found" />
      <strong> Nenhum resultado encontrado! </strong>
    </NotFoundContainer>
  );
}

export { NotFound };
