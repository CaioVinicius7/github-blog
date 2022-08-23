import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 18.5rem;
  background: ${(props) => props.theme["base-profile"]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  img:nth-child(2) {
    margin-top: -6rem;
  }

  @media (max-width: 1080px) {
    img:nth-child(1),
    img:nth-child(3) {
      display: none;
    }

    justify-content: center;
  }
`;
