import styled from "styled-components";

export const MainButton = styled.button`
  width: 164px;
  height: 43px;
  border-radius: 11px;
  border: 2px solid ${(props) => props.theme["gray-900"]};

  background: ${(props) => props.theme["ice-white"]};

  &:hover {
    background: ${(props) => props.theme["red-300"]};
    color: ${(props) => props.theme.white};
    border: 2px solid ${(props) => props.theme["red-300"]};

    transition: all 0.2s;
  }
`;
