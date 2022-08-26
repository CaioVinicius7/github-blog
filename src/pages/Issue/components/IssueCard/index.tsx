import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { IssueCardContainer } from "./styles";

interface IssueCardProps {
  title: string;
  comments: number;
  htmlUrl: string;
  createdAt: Date;
  user: string;
}

function IssueCard({
  title,
  comments,
  htmlUrl,
  createdAt,
  user
}: IssueCardProps) {
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR
  });

  return (
    <IssueCardContainer>
      <header>
        <NavLink to="/home">
          <FaChevronLeft />
          Voltar
        </NavLink>

        <a href={htmlUrl} target="_blank" rel="noreferrer">
          Ver no github
          <FaExternalLinkAlt />
        </a>
      </header>

      <strong> {title} </strong>

      <footer>
        <span>
          <FaGithub color="#3A536B" />
          {user}
        </span>

        <span>
          <FaCalendarDay color="#3A536B" />
          {formattedDate}
        </span>

        <span>
          <FaComment color="#3A536B" />
          {comments} comentários
        </span>
      </footer>
    </IssueCardContainer>
  );
}

export { IssueCard };
