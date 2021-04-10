import styled from 'styled-components';
import { responsive } from "../UI/responsive/responsive";

export const Container = styled.div`
    height: auto;
  padding: 0vh 0vh 4vh 0vh;
  @media ${responsive.tabletL} {
    padding: 0vh 0vh 4vh 0vh;
  }
  @media ${responsive.tablet} {
    padding: 0vh 0vh 4vh 0vh;
  }
  @media (max-width: 590px) {
    padding: 0vh 0vh 0vh 0vh;
  }
  @media ${responsive.mobileL} {
    padding: 0vh 0vh 0vh 0vh;
  }
  @media ${responsive.mobileM} {
    padding: 0vh 0vh 0vh 0vh;
  }
`;