import styled from "styled-components";

export const SearchFormContainer = styled.div`
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 160%;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  input {
    width: 100%;

    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-border"]};
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};

    transition: 0.2s;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
    }
  }
`;
