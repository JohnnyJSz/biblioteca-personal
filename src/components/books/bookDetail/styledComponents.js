import styled from "styled-components";
import { responsive } from "../../UI/responsive/responsive";

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
