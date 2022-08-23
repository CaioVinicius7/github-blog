import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme["base-text"]};
    background: ${(props) => props.theme["base-background"]};
  }

  body, input, textarea, button {
    font-family: "Nunito", monospace;
    font-weight: 400;
    font-size: 1rem;
  }
`;
