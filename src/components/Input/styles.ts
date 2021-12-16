import styled, { css } from "styled-components";

interface IContainerProps {
  isFilled: Boolean;
  isFocused: Boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid var(--black);
  background-color: var(--black);
  border-radius: 4px;
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;

  svg {
    margin-left: 5px;
    color: var(--text);
  }

  ${(props) =>
    props.isFocused &&
    css`
      svg {
        color: var(--yellow-dark);
      }

      border-color: var(--yellow-dark);
    `}
  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: var(--yellow-dark);
      }
    `}

  input {
    flex: 1;
    height: 100%;
    padding: 8px 10px;
    font-size: 14px;
    background-color: transparent;
    color: #fff;
    border: 0;
    outline: none;

    &::placeholder {
      font-size: 14px;
    }
  }

  .icon-click {
    cursor: pointer;
    margin-right: 8px;
  }
`;
