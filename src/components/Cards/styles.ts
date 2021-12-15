import styled from "styled-components";
import { Card as Cards } from "reactstrap";

export const Card = styled(Cards)`
  width: 100%;
  height: 100%;
  border: 0;

  background: var(--background);
  transition: background 0.7s, border 0.7s, border-radius 0.7s, box-shadow 0.7s;
  .header {
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    .avatar {
      position: relative;
      img {
        width: 42px;
        border-radius: 120px;
        object-fit: cover;
      }
    }

    .header-desc {
      display: flex;
      flex-direction: column;

      .author {
        font-size: 14px;
        font-weight: 500;
        color: var(--gray);
      }
      .function {
        font-size: 12px;
        color: var(--text);
      }
    }
  }

  .images {
    position: relative;
    img {
      object-fit: cover;
      width: 100%;
      height: 200px;
    }
    .img-description {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      background: rgba(0, 0, 0, 0.5);

      .category {
        padding-top: 25px;

        label {
          padding: 5px 15px 5px 10px;
          color: var(--white);
          font-size: 12px;
          font-family: "Rubik", sans-serif;
          text-transform: uppercase;
          font-weight: 500;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }

        .bg-category-primary {
          background: var(--green);
        }

        .bg-category-second {
          background: var(--blue);
        }

        .bg-category-third {
          background: var(--red-light);
        }

        .bg-category-fourth {
          background: var(--primary);
        }

        .bg-category-fifth {
          background: var(--orange);
        }

        .bg-category-sixth {
          background: var(--yellow);
        }
      }

      .icons {
        width: 100%;

        .icon-items {
          margin: 0;
          padding: 15px;

          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 15px;

          label {
            display: flex;
            align-items: center;
            gap: 5px;

            color: var(--white);

            .heart {
              color: var(--red);
            }
            span {
              font-size: 16px;
              font-family: "Rubik", sans-serif;
            }
          }
        }
      }
    }
  }

  .description {
    padding: 10px 15px;

    .title {
      display: block;
      color: var(--white);
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
      font-family: "Rubik", sans-serif;
      text-transform: uppercase;
      position: relative;
      padding-bottom: 10px;

      &::before,
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background: var(--white);
      }

      &::before {
        width: 5px;
        height: 5px;
        border-radius: 50%;
      }
      &::after {
        left: 10px;
        width: 30px;
        height: 4px;
        border-radius: 10px;
      }
    }

    .desc-items {
      padding: 10px 0 15px;

      display: flex;
      flex-direction: column;
      gap: 10px;

      li {
        display: flex;
        gap: 10px;
        color: var(--gray);

        span {
          font-size: 14px;
        }
      }
    }
  }
`;
