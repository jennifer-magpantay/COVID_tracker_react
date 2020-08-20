import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;  
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  padding: 1%;
  border-bottom: 1px solid var(--blue);

  @media (max-width: 800px) {
    flex-wrap: wrap;
  
  }
`;

export default Wrapper;
