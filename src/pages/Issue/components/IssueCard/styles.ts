import styled from "styled-components";

export const IssueCardContainer = styled.div`
  position: sticky;
  margin-top: -5.5rem;
  padding: 2.5rem 3rem;
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme["base-profile"]};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      color: ${(props) => props.theme.blue};
      border-bottom: 1px solid transparent;
      transition: 0.2s;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        border-bottom: 1px solid;
      }
    }
  }

  strong {
    font-size: 1.5rem;
    line-height: 130%;
    word-break: break-all;
    color: ${(props) => props.theme["base-title"]};
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  @media (max-width: 550px) {
    gap: 2rem;

    strong {
      text-align: center;
    }

    footer {
      justify-content: center;
      gap: 1rem;
    }
  }

  /* @media (max-width: 510px) {
    padding: 1.5rem 1.5rem;
  } */
`;
