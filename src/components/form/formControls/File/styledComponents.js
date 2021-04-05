import styled from "styled-components";
import { responsive } from "../../../UI/responsive/responsive";

export const MainContainer = styled.div`
  width: 49.5vmax;
  padding: 1rem;

  @media ${responsive.tabletL} {
    width: 48.5vmax;
  }

  @media ${responsive.tablet} {
    width: 47.5vmax;
  }

  @media (max-width: 590px) {
    width: 46.5vmax;
  }

  @media ${responsive.mobileL} {
    width: 43.5vmax;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${responsive.mobileM} {
    width: 41.5vmax;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MainLabel = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bolder;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 48vmax;
  background-color: whitesmoke;
  outline-style: none;
  border-radius: 15px;
  &::-webkit-file-upload-button {
    color: white;
    display: inline-block;
    background: #525455;
    border: none;
    padding: 7px 15px;
    font-weight: 700;
    border-radius: 15px;
    white-space: nowrap;
    cursor: pointer;
    font-size: 10pt;
  }

  @media ${responsive.tabletL} {
    width: 47vmax;
  }

  @media ${responsive.tablet} {
    width: 46vmax;
  }

  @media (max-width: 590px) {
    width: 45vmax;
  }

  @media ${responsive.mobileL} {
    width: 42vmax;
  }

  @media ${responsive.mobileM} {
    width: 41vmax;
  }

`;

export const ImgPreviewContainer = styled.div`
  margin-top: 1rem;
  width: 250px;
  height: auto;

  @media ${responsive.mobileL} {
    width: 200px;
  }

  @media ${responsive.mobileM} {
    width: 180px;  
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
`;
