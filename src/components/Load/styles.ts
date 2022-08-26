import styled from "styled-components";

export const SpinnerContainer = styled.div`
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  span {
    font-size: 1.75rem;
    color: ${(props) => props.theme["base-title"]};
  }
`;
