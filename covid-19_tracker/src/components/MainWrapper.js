import styled from "styled-components";

const MainWrapper = styled.main`
  /* flex: 0.6; */
  width: 68vw;
  height: 100vh;
 
  @media (max-width: 800px) {
    border-bottom: 1px solid var(--blue);
    width: 95vw;
  }
`;

export default MainWrapper;