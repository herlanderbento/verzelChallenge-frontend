import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 70px 15px;
  display: flex;
  align-items: center;

  .hero-text {
    position: relative;

    .hero-sub-title {
      display: flex;
      align-items: center;
      gap: 16px;

      .sub-title {
        color: var(--gray);
        font-size: 24px;
        font-weight: bold;
      }
    }

    .title {
      font-size: 48px;
      font-weight: 600;
      line-height: 62px;
      margin: 40px 0 24px;
      color: var(--white);

      span {
        color: var(--green-light);
      }
    }

    .text {
      font-size: 16px;
      line-height: 28px;
    }
  }

  .cta {
    margin-top: 40px;

    .sign-up {
      padding: 16px 52px;
      background: var(--yellow-dark);
      border: 0;
      color: var(--background);
      font-size: 20px;
      font-weight: 600;
      border-radius: 100px;
    }
  }

  .hero {
    text-align: center;

    .img-fluid {
      width: 500px;
      object-fit: cover;
    }
  }
`;
