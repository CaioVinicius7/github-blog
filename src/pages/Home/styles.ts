import styled from "styled-components";

export const IssuesContainer = styled.section`
  margin-top: 3rem;
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
