import styled from "styled-components";

export const GeneralContainer = styled.div`
  width: 75%;
  background-color: #ccc;
  display: flex;
  justify-content: space-evenly;
  padding: 2rem 3rem;
  margin: 1.5rem auto;
  border-radius: 10px;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 520px;
  & img {
    max-width: 100%;
    max-height: 100%;
    box-shadow: -10px 10px 10px -5px rgba(0, 0, 0, 1);
  }
  & a {
    text-decoration: none;
    color: #18191B;
  }
`;

export const InfoContainer = styled.div`
  width: 70%;
  margin-left: 1rem;
  padding: 0 1rem;
  & a {
    text-decoration: none;
    color: #18191B;
  }
`;

export const Info = styled.div`
  
`;

export const InfoDescription = styled.div`
  
`;

export const InfoCategoriesAuthors = styled.div`
  display: flex;
  flex-wrap: wrap;
`;