import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { IssueCardContainer } from "./styles";

interface IssueCardProps {
  title: string;
  content: string;
  createdAt: Date;
}

function IssueCard({ title, content, createdAt }: IssueCardProps) {
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR
  });

  const shortenedContent = content.substring(0, 181).concat("...");

  return (
    <IssueCardContainer>
      <div>
        <strong> {title} </strong>
        <span> {formattedDate} </span>
      </div>

      <p>{shortenedContent}</p>
    </IssueCardContainer>
  );
}

export { IssueCard };
