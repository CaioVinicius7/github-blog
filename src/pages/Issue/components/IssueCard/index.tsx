import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub
} from "react-icons/fa";

import { IssueCardContainer } from "./styles";

function IssueCard() {
  return (
    <IssueCardContainer>
      <header>
        <a href="#">
          <FaChevronLeft />
          Voltar
        </a>

        <a href="#">
          Ver no github
          <FaExternalLinkAlt />
        </a>
      </header>

      <strong> Titulo </strong>

      <footer>
        <span>
          <FaGithub color="#3A536B" />
          CaioVinicius7
        </span>

        <span>
          <FaCalendarDay color="#3A536B" />
          há 1 dia
        </span>

        <span>
          <FaComment color="#3A536B" />5 comentários
        </span>
      </footer>
    </IssueCardContainer>
  );
}

export { IssueCard };
