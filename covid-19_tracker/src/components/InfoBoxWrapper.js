import styled from "styled-components";

const InfoBoxWrapper = styled.div`
  width: 100%;

  .caption {
    color: #636e72;
    padding-left: 4%;
    margin-bottom: 0;
    font-size: 14px;
  
    @media (max-width: 800px){
    .caption {
        font-size: 12px;
      }
    }
  }  
`;

export default InfoBoxWrapper;
