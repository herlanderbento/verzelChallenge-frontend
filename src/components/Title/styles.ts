import styled from "styled-components";

export const Section = styled.div`
  .sub-title,
  .sub-title-right {
    display: block;
    color: var(--yellow-dark);
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    position: relative;
    margin-bottom: 14px;
    padding-bottom: 14px;
  }

  .sub-title {
    &::before,
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background: var(--yellow-dark);
    }

    &::before {
      width: 5px;
      height: 5px;
      border-radius: 50%;
    }
    &::after {
      left: 10px;
      width: 30px;
      height: 3px;
      border-radius: 10px;
    }
  }

  .sub-title-right {
    &::before,
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      background: var(--yellow-dark);
    }

    &::before {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      right: 40px;
    }
    &::after {
      right: 0px;
      border-radius: 10px;
      width: 35px;
      height: 3px;
    }
  }

  .title {
    font-size: 46px;
    font-family: "Roboto", sans-serif;
    color: var(--gray);
    margin-bottom: 28px;
  }

  .text {
    font-size: 14px;
  }
`;

export const SectionSecond = styled.div`
  text-align: center;

  .title {
    text-align: center;
    position: relative;
    margin-bottom: 14px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      bottom: 1px;
      left: calc(50% - 22px);
      transform: translate(-50%);
      width: 30px;
      height: 3px;
      background: var(--yellow-dark);
      border-radius: 10px;
    }

    &::after {
      left: calc(50% + 22px);
    }

    .sub-title {
      display: block;
      color: var(--yellow-dark);
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      font-family: "Roboto", sans-serif;
      text-transform: uppercase;
      position: relative;
      margin-bottom: 14px;
      padding-bottom: 14px;

      &::before {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        bottom: 0;
        left: 50%;
        background: var(--yellow-dark);
        transform: translate(-50%);
      }
    }
  }

  .h2-title {
    font-size: 46px;
    line-height: 55px;
    font-weight: 700;
    color: var(--gray);
    font-family: "Roboto", sans-serif;
    text-transform: capitalize;
    margin-bottom: 28px;
    position: relative;
  }

  .text {
    font-size: 14px;
  }
`;
