import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.white};
  }

  body{
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme["gray-900"]};
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
