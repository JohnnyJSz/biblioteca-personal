import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  background-color: #C5C5C5;
  position: fixed;
  width: 100vw;
  height: 10vh;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.75);
  z-index: 2;

  img {
    width: auto;
    height: 8vh;
    padding: 10px;
    border-radius: 20px;
  }
`;
