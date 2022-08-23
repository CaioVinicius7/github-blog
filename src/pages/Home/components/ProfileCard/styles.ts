import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  position: sticky;
  margin-top: -5.5rem;
  padding: 2.5rem 3rem;
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme["base-profile"]};

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 510px) {
    padding: 1.5rem 1.5rem;
  }
`;

export const ProfileInfos = styled.div`
  flex: 1;
  height: 9.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${(props) => props.theme["base-title"]};
    }

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

  p {
    margin-top: 0.5rem;
    line-height: 160%;
    font-family: "Nunito";
  }

  footer {
    display: flex;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  @media (max-width: 900px) {
    gap: 1rem;

    p {
      text-align: justify;
    }

    footer {
      justify-content: center;
    }
  }

  @media (max-width: 510px) {
    width: 100%;

    footer {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;
