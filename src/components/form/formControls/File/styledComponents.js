import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 1rem;
`;

export const MainLabel = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bolder;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 46rem;
  background-color: whitesmoke;
  outline-style: none;
  border-radius: 15px;
  &::-webkit-file-upload-button {
    color: white;
    display: inline-block;
    /* background: #1cb6e0; */
    background: #525455;
    border: none; 
    padding: 7px 15px;
    font-weight: 700;
    border-radius: 15px;
    white-space: nowrap;
    cursor: pointer;
    font-size: 10pt;
  }
`;

export const ImgPreviewContainer = styled.div`
  margin-top: 1rem;
  width: 250px;
  height: auto;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
`;
