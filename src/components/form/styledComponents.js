/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { Form } from "formik";
import { responsive } from "../UI/responsive/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem auto 0rem auto;
`;

export const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  max-width: 75vmax;
  /* width: auto;
  max-width: 75vmax; */
  height: 100%;
  padding: 1rem;
  background-color: #e6e6e6;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);

  @media ${responsive.tabletL} {
    width: 100%;
  }

  @media ${responsive.tablet} {
    width: 100%;
  }

  @media (max-width: 590px) {
    width: auto;
    padding: 0.8rem;
  }

  @media ${responsive.mobileL} {
    width: auto;
    padding: 0.6rem;
  }

  @media ${responsive.mobileM} {
    width: auto;
    padding: 0.4rem;
    min-width: 100vmin;
  }
`;

export const Button = styled.button`
  margin: 1rem;
  width: 10rem;
  height: 3rem;
  font-size: 120%;
  font-weight: bold;
  outline: none;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
`;
