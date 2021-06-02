import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  h1 {
    color: #4d4d4d;
    font-size: 64px;
    font-weight: 400;
    margin-top: 40px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & + div {
    margin-top: 16px;
  }

  & > div {
    & + div {
      margin-left: 20px;
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;

    & > div {
      & + div {
        margin-left: 0;
      }
    }
  }
`;

export const Box = styled.div`
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 484px;
  margin-top: 36px;
  padding: 20px;
  width: 1000px;

  @media (max-width: 992px) {
    height: 100%;
    width: 80%;
  }
`;

export const Btn = styled.button`
  background-color: ${(props) => (props.primary ? "#1E5DFF" : "#E5E5E5")};
  border-radius: 4px;
  color: ${(props) => (props.primary ? "#FFFFFF" : "#4D4D4D")};
  font-family: "montserrat", sans-serif;
  font-size: 20px;
  height: 48px;
  transition: ease-in-out 0.2s;
  width: 114px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: ease-in-out 0.2s;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
