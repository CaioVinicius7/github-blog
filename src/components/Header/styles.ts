import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 100vw;
  height: 18.5rem;
  background-image: linear-gradient(#0b1b2b, #0d253d);

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
