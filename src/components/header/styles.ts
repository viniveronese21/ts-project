import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 7.1rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${(props) => props.theme["neutral-50"]};
  border: 1px solid red;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["gray-900"]};
    font-weight: 400;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme["gray-900"]};
      transition: all 0.2s;
    }
  }
`;
