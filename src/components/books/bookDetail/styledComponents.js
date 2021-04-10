import styled from "styled-components";
import { responsive } from "../../UI/responsive/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6vh;
  @media ${responsive.tabletL} {
    padding-bottom: 6vh;
  }
  @media ${responsive.tablet} {
    padding-bottom: 6vh;
  }
  
  @media (max-width: 590px) {
    flex-direction: column;
    padding-bottom: 0vh;
  }
  @media ${responsive.mobileL} {
    flex-direction: column;
    padding-bottom: 0vh;
  }
  @media ${responsive.mobileM} {
    flex-direction: column;
    padding-bottom: 0vh;
  }
`;
export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${responsive.tabletL} {
  }

  @media ${responsive.tablet} {
  }

  @media (max-width: 590px) {
    flex-direction: column;
  }

  @media ${responsive.mobileL} {
    flex-direction: column;
  }

  @media ${responsive.mobileM} {
    flex-direction: column;
  }
`;
