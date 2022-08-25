import { useEffect, useState } from "react";

import { IssueCard } from "./components/IssueCard";
import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";

import { IssuesContainer } from "./styles";

import { api } from "../../lib/axios";
import { NotFound } from "./components/NotFound";

interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: Date;
}

function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [filter, setFilter] = useState("");

  function filterIssues(filter: string) {
    setFilter(filter);
  }

  async function loadIssues() {
    const response = await api.get(
      "search/issues?q=repo:caiovinicius7/github-blog"
    );

    setIssues(response.data.items);
  }

  useEffect(() => {
    loadIssues();
  }, []);

  const filteredIssues = issues.filter((issue) =>
    issue.title.toLowerCase().includes(filter.toLowerCase())
  );

  const filterIsEmpty = filter.length === 0;
  const filteredIssuesIsEmpty = filteredIssues.length === 0;

  return (
    <>
      <ProfileCard />

      <SearchForm issuesQuantity={issues.length} filterIssues={filterIssues} />

      {filteredIssuesIsEmpty && !filterIsEmpty && <NotFound />}

      <IssuesContainer>
        {filterIsEmpty
          ? issues.map((issue) => {
              return (
                <IssueCard
                  key={issue.id}
                  title={issue.title}
                  content={issue.body}
                  createdAt={issue.created_at}
                />
              );
            })
          : filteredIssues.map((issue) => {
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
