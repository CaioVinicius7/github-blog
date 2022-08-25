import { IssueCard } from "./components/IssueCard";

import { IssueContentContainer } from "./styles";

function Issue() {
  return (
    <>
      <IssueCard />

      <IssueContentContainer>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ipsa
          eaque error nisi, reprehenderit repudiandae qui porro aliquid nemo,
          officiis dolorem. Officia sit deserunt consequuntur eveniet, doloribus
          odio voluptatum aspernatur.
        </p>
      </IssueContentContainer>
    </>
  );
}

export { Issue };
