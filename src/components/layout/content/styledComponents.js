import styled from "styled-components";
import {responsive} from '../../UI/responsive/responsive';

export const MainContent = styled.div`
  padding: 12vh 2rem 8vh 2rem;
  height: 85vh;

  @media ${responsive.tabletL} {
    height: 85vh;
  }

  @media ${responsive.tablet} {
    height: 85vh;
  }

  @media (max-width: 590px) {
    height: auto;
  }

  @media ${responsive.mobileL} {
    height: auto;
  }

  @media ${responsive.mobileM} {
    height: auto;
  }
`;
