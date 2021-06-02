import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 0 160px 0;
  display: flex;
  width: 50%;
`;

export const Box = styled.div`
  background-color: #e5e5e5;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  position: relative;
  width: 100px;
  z-index: 1;

  &::before {
    background-color: #e5e5e5;
    content: "";
    height: 100px;
    left: 50%;
    position: absolute;
    top: 100%;
    width: 4px;
  }

  &::after {
    background-color: #e5e5e5;
    border-radius: 50px;
    content: "";
    height: 16px;
    left: 44%;
    position: absolute;
    top: calc(100% + 100px);
    width: 16px;
  }

  h1 {
    color: #1e5dff;
    font-size: 68px;
    margin-top: 10px;
  }
`;

export const Text = styled.div`
  margin-left: 20px;
  text-align: left;

  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
  }
  h3 {
    color: #4d4d4d;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    line-height: 24px;
  }
  small {
    color: #4d4d4d;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 18px;
  }
  p {
    color: #4d4d4d;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    line-height: 20px;
  }
`;
