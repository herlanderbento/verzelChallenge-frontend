import styled from "styled-components";

export const HeaderContent = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--borders);

  .navbar {
    background: transparent;
    padding: 0;

    @media screen and (max-width: 767px) {
      padding: 15px 0;
    }
  }
  .navbar-brand {
    color: var(--gray);
    font-size: 32px;
    font-weight: 600;
    margin-right: 80px;

    span {
      color: var(--green-light);
    }
  }

  .navbar-toggler {
    border: 0;
    color: var(--text);

    &:focus {
      box-shadow: none !important;
    }

    svg {
      font-size: 36px;
    }
  }

  .navbar-nav {
    gap: 32px;

    @media screen and (max-width: 767px) {
      gap: 0;
      margin-bottom: 20px;
    }
  }

  .nav-link {
    font-size: 16px;
    color: var(--text);
    padding: 34px 0;
    position: relative;
    transition: color 0.2s;

    @media screen and (max-width: 767px) {
      padding: 15px 0;
      margin: 0;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background: var(--yellow-dark);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      opacity: 0;

      @media screen and (max-width: 767px) {
        width: 14%;
      }
    }

    &:hover {
      color: var(--white);
      ::after {
        opacity: 1;
      }
    }
  }

  .is-Active {
    color: var(--gray);
    font-weight: 600;
    position: relative !important;
    &::after {
      content: "";
      background: var(--yellow-dark);
      width: 100%;
      height: 3px !important;
      position: absolute;
      left: 0;
      bottom: 0;
      opacity: 1;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      @media screen and (max-width: 767px) {
        width: 14%;
      }
    }
  }
`;

export const Button = styled.button`
  background: var(--sign-in) !important;
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  padding: 12px 34px 12px 17px;

  border-radius: 100px;
  border: 0;

  &:focus {
    border: 0 !important;
    box-shadow: transparent !important;
    outline: 0 !important;
  }

  svg {
    margin-right: 8px;
    font-size: 22px;
    color: var(--yellow-dark);
  }
`;
