import styled from "styled-components";

export const IssueContentContainer = styled.section`
  padding: 2.5rem 2rem;
  color: ${(props) => props.theme["base-text"]};
  word-break: break-all;

  p {
    line-height: 160%;
    margin-bottom: 1rem;
  }

  a {
    color: ${(props) => props.theme.blue};
    margin-bottom: 1rem;
    text-decoration: none;
  }

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
  }

  pre {
    border-radius: 2px;
    padding: 1rem;
    background: ${(props) => props.theme["base-post"]};
    overflow: auto;
  }

  code {
    line-height: 150%;
  }

  @media (max-width: 900px) {
    padding: 2.5rem 1rem;
  }
`;
