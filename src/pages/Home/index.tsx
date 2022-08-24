import { IssueCard } from "./components/IssueCard";
import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";
import { IssuesContainer } from "./styles";

function Home() {
  return (
    <>
      <ProfileCard />
      <SearchForm />

      <IssuesContainer>
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
      </IssuesContainer>
    </>
  );
}

export { Home };
