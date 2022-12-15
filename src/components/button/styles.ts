import styled from "styled-components";

export const MainButton = styled.button`
  width: 10.25rem;
  height: 2.6875rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.6875rem;
  border: 0.125rem solid ${(props) => props.theme["gray-900"]};

  background: ${(props) => props.theme["ice-white"]};

  &:hover {
    background: ${(props) => props.theme["red-300"]};
    color: ${(props) => props.theme.white};
    border: 0.125rem solid ${(props) => props.theme["red-300"]};

    transition: all 0.2s;
  }
`;
