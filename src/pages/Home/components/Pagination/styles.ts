import styled from "styled-components";

export const PaginationContainer = styled.footer`
  max-width: 30rem;
  margin: 3.5rem auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const CurrentPage = styled.span`
  border-radius: 6px;
  border: 2px solid transparent;
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme["base-post"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageController = styled.button`
  border-radius: 6px;
  border: 2px solid transparent;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-post"]};

  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    border-color: ${(props) => props.theme["base-label"]};
  }
`;
