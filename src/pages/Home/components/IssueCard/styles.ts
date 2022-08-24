import styled from "styled-components";

export const IssueCardContainer = styled.div`
  padding: 1.5rem 2.5rem;

  border-radius: 10px;
  border: 2px solid transparent;
  background: ${(props) => props.theme["base-post"]};

  transition: 0.2s;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    strong {
      max-width: 70%;
      line-height: 160%;
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-title"]};
    }

    span {
      margin-top: 0.5rem;
      display: block;
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  p {
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
  }

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme["base-label"]};
  }
`;
