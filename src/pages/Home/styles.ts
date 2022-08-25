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

export const NotFoundContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  img {
    width: 6rem;
    filter: invert(75%);
  }

  @media (max-width: 900px) {
    strong {
      font-size: 1.25rem;
    }

    img {
      width: 4rem;
    }
  }
`;
