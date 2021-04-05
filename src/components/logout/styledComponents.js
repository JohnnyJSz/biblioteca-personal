import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  padding: 2rem 3rem;
  margin: auto;
  width: 100%;
  max-width: 75vmax;
  /* margin: 1.5rem auto; */
  border-radius: 10px;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);

  h1, h3 {
    margin-bottom: 1rem;
  }
`;
