import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { IssueCardContainer } from "./styles";

function IssueCard() {
  const createdAt = new Date("2022-08-22");
  const formattedDate = formatDistanceToNow(createdAt, {
    addSuffix: true,
    locale: ptBR
  });

  const content =
    "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.";
  const shortenedContent = content.substring(0, 181).concat("...");

  return (
    <IssueCardContainer>
      <div>
        <strong> JavaScript data types and data structures </strong>
        <span> {formattedDate} </span>
      </div>

      <p>{shortenedContent}</p>
    </IssueCardContainer>
  );
}

export { IssueCard };
