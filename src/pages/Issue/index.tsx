import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";

import { IssueCard } from "./components/IssueCard";

import { IssueContentContainer } from "./styles";

import { api } from "../../lib/axios";

interface IssueData {
  title: string;
  body: string;
  number: number;
  comments: number;
  html_url: string;
  created_at: Date;
  user: {
    login: string;
  };
}

function Issue() {
  const navigate = useNavigate();
  const [issue, setIssue] = useState<IssueData>({} as IssueData);
  const [isLoading, setIsLoad] = useState(true);

  const { issueNumber } = useParams<{ issueNumber: string }>();

  !issueNumber && navigate("/home");

  async function loadIssue(issueNumber: string) {
    await api
      .get(`/repos/caiovinicius7/github-blog/issues/${issueNumber}`)
      .then((response) => {
        setIsLoad(false);
        setIssue(response.data);
      });
  }

  useEffect(() => {
    loadIssue(issueNumber!);
  }, [issueNumber]);

  return isLoading ? (
    <h1> Carregando... </h1>
  ) : (
    <>
      <IssueCard
        user={issue.user.login}
        title={issue.title}
        htmlUrl={issue.html_url}
        comments={issue.comments}
        createdAt={issue.created_at}
      />

      <IssueContentContainer>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </IssueContentContainer>
    </>
  );
}

export { Issue };
