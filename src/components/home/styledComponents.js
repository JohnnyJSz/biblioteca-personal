import styled from "styled-components";
import { responsive } from "../UI/responsive/responsive";

export const MainContainer = styled.div`
  width: 50vmax;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100%;

  h1 {
    font-size: 600%;
  }

  @media ${responsive.tabletL} {
    padding: 1rem;
    width: 48vmax;
  }

  @media ${responsive.tablet} {
    padding: 1rem;
    width: 46vmax;
  }

  @media (max-width: 590px) {
    padding: 1rem;
    width: 44vmax;
  }

  @media ${responsive.mobileL} {
    padding: 0rem;
    width: 40vmax;
  }

  @media ${responsive.mobileM} {
    width: 35vmax;
    padding: 0;
  }
`;

export const Form = styled.form`
  width: 40vmax;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media ${responsive.tabletL} {
    width: 40vmax;
    height: 15vh;
  }

  @media ${responsive.tablet} {
    width: 40vmax;
    height: 15vh;
  }

  @media (max-width: 590px) {
    width: 40vmax;
    height: 17vh;
  }

  @media ${responsive.mobileL} {
    width: 40vmax;
    height: 15vh;
  }

  @media ${responsive.mobileM} {
    border: 1px solid red;
    width: 30vmax;
    height: 12vh;
  }
`;

export const Input = styled.input`
  height: 2rem;
  width: 20vmax;
  outline: none;
  border: 1px solid black;
  border-radius: 3px;
  text-align: center;
  font-size: 1rem;
`;

export const Button = styled.button`
  background-color: #2d4ebf;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 3px;
  height: 3rem;
  width: 20vmax;
`;
