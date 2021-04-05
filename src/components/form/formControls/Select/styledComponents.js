import styled from "styled-components";
import { responsive } from "../../../UI/responsive/responsive";

export const Container = styled.div`
  width: 49.5vmax;
  padding: 1rem;

  .creatableSelect {
    background-color: blue;
  }

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
  }

  @media ${responsive.mobileM} {
    width: 41.5vmax;
  }
`;

export const Label = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bolder;
  display: flex;
  @media ${responsive.mobileL} {
    justify-content: center;
  }
  @media ${responsive.mobileM} {
    justify-content: center;
  }
`;

export const MyStyles = styled.object;
