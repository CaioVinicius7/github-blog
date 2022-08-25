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

  const shortenedTitle =
    title.length > 38 ? title.substring(0, 38).concat("...") : title;

  const shortenedContent = content.substring(0, 181).concat("...");

  return (
    <IssueCardContainer>
      <div>
        <strong> {shortenedTitle} </strong>
        <span> {formattedDate} </span>
      </div>

      <p>{shortenedContent}</p>
    </IssueCardContainer>
  );
}

export { IssueCard };
