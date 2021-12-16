import styled from "styled-components";

export const Section = styled.div`
  height: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: var(--black);
`;

export const FormContent = styled.div`
  width: 100%;
  padding: 20px 30px;
  background: var(--background);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
  }
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  form {
    width: 100%;
  }

  .header {
    width: 100%;
    margin: 20px 0;
    text-align: left;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 18px;
      font-weight: 600;
      color: var(--gray);
      margin-bottom: 15px;
    }
  }
  .form-items {
    width: 100%;
    margin: 8px 0;
    label {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
      color: var(--gray);
    }
  }

  .footer {
    width: 100%;
    margin-top: 20px;

    .link {
      text-align: center;
      a {
        color: var(--text);
        font-size: 16px;
        font-weight: 600;
        svg {
          margin-left: 10px;
          font-size: 24px;
        }

        &:hover {
          color: var(--yellow-dark);
        }
      }
    }

    .socials-networks {
      display: flex;
      gap: 15px;
      margin-top: 20px;
      padding: 0;

      li label {
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text);
        background: var(--black);
        border-radius: 5px;
        cursor: pointer;

        transition: all 0.2s ease-out;

        svg {
          font-size: 18px;
        }

        &:hover {
          background: var(--yellow-dark);
          color: var(--gray);
        }
      }
    }
  }
`;

export const Logo = styled.span`
  color: var(--gray) !important;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;

  span {
    color: var(--green-light);
  }
`;

export const Description = styled.div`
  h4 {
    font-size: 48px;
    font-weight: 70px;
    color: var(--gray);
    line-height: 68px;
    margin-bottom: 40px;
  }
`;
