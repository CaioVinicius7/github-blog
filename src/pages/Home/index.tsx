import { useEffect, useState } from "react";

import { IssueCard } from "./components/IssueCard";
import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";

import { api } from "../../lib/axios";
import { IssuesContainer } from "./styles";

interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: Date;
}

function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);

  async function loadIssues() {
    const response = await api.get(
      "search/issues?q=repo:caiovinicius7/github-blog"
    );

    setIssues(response.data.items);
  }

  useEffect(() => {
    loadIssues();
  }, []);

  return (
    <>
      <ProfileCard />
      <SearchForm issuesQuantity={issues.length} />

      <IssuesContainer>
        {issues.map((issue) => {
          return (
            <IssueCard
              key={issue.id}
              title={issue.title}
              content={issue.body}
              createdAt={issue.created_at}
            />
          );
        })}
      </IssuesContainer>
    </>
  );
}

export { Home };
