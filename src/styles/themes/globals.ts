import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  :focus{
    outline: 0;
  }

  body{
    background: ${(props) => props.theme["neutral-50"]};
    color: ${(props) => props.theme["gray-900"]};
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
  }
`;
