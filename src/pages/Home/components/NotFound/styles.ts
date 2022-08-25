import styled from "styled-components";

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
