import styled from "styled-components";

import Link from "next/link";

export const HeaderContainer = styled.header`
  height: 113px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${(props) => props.theme["back-white"]};
  border: 1px solid red;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 24px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["gray-900"]};

    &:hover {
      color: ${(props) => props.theme["red-500"]};
    }

    &:active {
      border-bottom: 3px solid ${(props) => props.theme["gray-900"]};
    }
  }
`;

export const HeaderButton = styled.button`
  width: 164px;
  height: 43px;
  border-radius: 22px;
  border: 3px solid ${(props) => props.theme["gray-900"]};

  background: ${(props) => props.theme["back-white"]};

  &:hover {
    background: ${(props) => props.theme["red-300"]};
    color: ${(props) => props.theme.white};

    transition: all 0.2s;
  }
`;
