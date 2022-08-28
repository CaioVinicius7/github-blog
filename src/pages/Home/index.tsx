import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Load } from "../../components/Load";
import { IssueCard } from "./components/IssueCard";
import { NotFound } from "./components/NotFound";
import { Pagination } from "./components/Pagination";
import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";

import { IssuesContainer } from "./styles";

import { api } from "../../lib/axios";

interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: Date;
}

interface IssuesData {
  total: number;
  issues: Issue[];
}

function Home() {
  const [issuesData, setIssuesData] = useState<IssuesData>({
    total: 0,
    issues: []
  });
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  async function loadIssues(page = 1) {
    await api
      .get("search/issues", {
        params: {
          q: "repo:caiovinicius7/github-blog",
          per_page: 10,
          page
        }
      })
      .then((response) => {
        setIsLoading(false);
        setIssuesData({
          total: response.data.total_count,
          issues: response.data.items
        });
      });
  }

  useEffect(() => {
    loadIssues();
  }, []);

  function filterIssues(filter: string) {
    setFilter(filter);
  }

  const filteredIssues = issuesData.issues.filter((issue) =>
    issue.title.toLowerCase().includes(filter.toLowerCase())
  );

  const filterIsEmpty = filter.length === 0;
  const filteredIssuesIsEmpty = filteredIssues.length === 0;

  return isLoading ? (
    <Load />
  ) : (
    <>
      <ProfileCard />

      <SearchForm
        issuesQuantity={issuesData.issues.length}
        filterIssues={filterIssues}
      />

      {filteredIssuesIsEmpty && !filterIsEmpty && <NotFound />}

      <IssuesContainer>
        {filterIsEmpty
          ? issuesData.issues.map((issue) => {
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

      <Pagination total={issuesData.total} loadIssues={loadIssues} />
    </>
  );
}

export { Home };
