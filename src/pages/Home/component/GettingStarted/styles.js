import styled from "styled-components";

export const StyledHomeMyAdvantage = styled.div`
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 70px 0;

  p {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 20px 0;
  }

  table {
    width: calc(100% - 20vw);
    margin: 20px 0;
    border-radius: 10px;
    font-weight: 400;
  }

  table {
    border-collapse: separate;
    border-spacing: 0 5px !important;

    th {
      text-align: left;
      background: #efefef;
      height: 5rem;
      padding: 0 24px;
      border: none !important;
      font-weight: 700;
      font-size: 18px;
    }

    td, th {
      &:first-child {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      }

      &:last-child {
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }

    tr {
      border-bottom: 1px solid #efefef;
    }

    td {
      height: 5rem;
      padding: 0 24px;
      border: 1px solid #efefef !important;
      border-left: 0 !important;
      border-right: 0 !important;
      align-items: center;
      font-weight: 400;
      font-size: 18px;
      text-transform: lowercase;

      &:first-child {
        border-left: 1px solid #efefef !important;
      }

      &:last-child {
        border-right: 1px solid #efefef !important;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 40px 0;
    font-size: 1rem;
  }
`;
export const StyledHomeMyAdvantageIconsBar = styled.section`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 40px;
  padding: 0 5vw;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    height: auto;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding: 0;
  }
`;
export const StyledHomeMyAdvantageSingle = styled.article`
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  & span {
    width: 90%;
    height: 100%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #f0f0f0;
    border-radius: 80px;

    & p {
      width: 100%;
      text-align: center;
    }

    & svg {
      font-size: 4rem;
      transition: all 0.2s ease;
      filter: grayscale(100%);
      transform: scale(1.3);
    }
    :hover {
      background: rgb(252, 245, 232);
      background: radial-gradient(
        circle,
        rgba(252, 245, 232, 1) 26%,
        rgba(237, 205, 252, 0.05694152661064422) 62%
      );
      cursor: pointer;
      & svg {
        filter: grayscale(0%);
        color: darkviolet;
        transform: scale(1.5);
      }
      & p {
        color: orange;
      }
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    & p {
      width: 120px;
      text-align: center;
    }
    & span {
      max-width: 120px;
      height: 180px;

      & p {
        font-size: 0.8rem;
      }

      & svg {
        font-size: 2.5rem;
      }

      :hover {
        & svg {
          font-size: 3rem;
        }
      }
    }
  }
`;
