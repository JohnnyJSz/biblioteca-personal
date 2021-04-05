import styled from "styled-components";
import { responsive } from '../../UI/responsive/responsive';

export const Container = styled.div`
  width: auto;
  max-width: 75vmax;
  background-color: #ccc;
  display: flex;
  justify-content: space-evenly;
  padding: 2rem 3rem;
  margin: 1rem auto 1.5rem auto;
  border-radius: 10px;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);

  @media ${responsive.tabletL} {
    align-items: center;
    width: auto;
  }

  @media ${responsive.tablet} {
    align-items: center;
    width: auto;
  }

  @media (max-width: 590px) {
    flex-direction: column;
    padding: 2rem 2rem;
    width: auto;
  }

  @media ${responsive.mobileL} {
    flex-direction: column;
    padding: 2rem 2rem;
    width: auto;
  }

  @media ${responsive.mobileM} {
    flex-direction: column;
    padding: 2rem 2rem;
    width: auto;
    min-width: 210px;
  }

`;

export const ImageContainer = styled.div`
  width: 300px;
  height: auto;
  & img {
    max-width: 100%;
    max-height: 100%;
    box-shadow: -10px 10px 10px -5px rgba(0, 0, 0, 1);
  }
  & a {
    text-decoration: none;
    color: #18191B;
  }

  @media (max-width: 590px) {
    width: 100%;
  }

  @media ${responsive.mobileL} {
    width: 100%;
  }

  @media ${responsive.mobileM} {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 70%;
  margin: 0 0 0 1rem;
  padding: 1rem 1rem;
  & a {
    text-decoration: none;
    color: #18191B;
  }

  @media (max-width: 590px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 0 0 0;
    padding: 0px;
  }

  @media ${responsive.mobileL} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 0 0 0;
    padding: 0px;
  }

  @media ${responsive.mobileM} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 0 0 0;
    padding: 0px;
  }

`;

export const RestInfo = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const InfoCategoriesAuthors = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 590px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${responsive.mobileL} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${responsive.mobileM} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;