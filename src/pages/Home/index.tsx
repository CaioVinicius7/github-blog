import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IssueCard } from "./components/IssueCard";
import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";

import { IssuesContainer } from "./styles";

import { api } from "../../lib/axios";
import { NotFound } from "./components/NotFound";

interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: Date;
}

function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [filter, setFilter] = useState("");

  const navigate = useNavigate();

  async function loadIssues() {
    const response = await api.get(
      "search/issues?q=repo:caiovinicius7/github-blog"
    );

    setIssues(response.data.items);
  }

  useEffect(() => {
    loadIssues();
  }, []);

  function filterIssues(filter: string) {
    setFilter(filter);
  }

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
                  onClick={() => navigate(`/issue/${issue.number}`)}
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
                  onClick={() => navigate(`/issue/${issue.number}`)}
                />
              );
            })}
      </IssuesContainer>
    </>
  );
}

export { Home };
