import { HTMLAttributes } from "react";

import { IssueCardContainer } from "./styles";

import { distanceToNow } from "../../../../lib/dateFns";

interface IssueCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
  createdAt: Date;
}

function IssueCard({ title, content, createdAt, ...props }: IssueCardProps) {
  const formattedDate = distanceToNow(createdAt);

  const shortenedTitle =
    title.length > 38 ? title.substring(0, 38).concat("...") : title;

  const shortenedContent = content.substring(0, 181).concat("...");

  return (
    <IssueCardContainer {...props}>
      <div>
        <strong> {shortenedTitle} </strong>
        <span> {formattedDate} </span>
      </div>

      <p>{shortenedContent}</p>
    </IssueCardContainer>
  );
}

export { IssueCard };
