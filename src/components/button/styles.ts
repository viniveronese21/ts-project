import styled from "styled-components";

export const MainButton = styled.button`
  width: 10.25rem;
  height: 2.6875rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.6875rem;
  border: 0.125rem solid ${(props) => props.theme["gray-900"]};

  background: ${(props) => props.theme["neutral-50"]};

  &:hover {
    background: ${(props) => props.theme["red-500"]};
    color: ${(props) => props.theme.white};
    border: 0.125rem solid ${(props) => props.theme["red-500"]};

    transition: all 0.2s;
  }
`;
