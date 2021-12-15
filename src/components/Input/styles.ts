import styled, { css } from "styled-components";

interface IContainerProps {
  isFilled: Boolean;
  isFocused: Boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid var(--borders);
  background-color: var(--borders);
  border-radius: 4px;
  width: 300px;
  height: 42px;
  padding: 10px 15px;
  margin-bottom: 10px;

  svg {
    margin-left: 5px;
    color: #373737;
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
    padding-left: 15px;
    font-size: 16px;
    background-color: transparent;
    color: #fff;
    border: 0;
  }

  .icon-click {
    cursor: pointer;
  }
`;
