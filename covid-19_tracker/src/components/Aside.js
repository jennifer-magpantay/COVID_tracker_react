import React from 'react';
import styled from 'styled-components';

const AsideWrapper = styled.aside`
width: 40vw;
height: 100vh;
padding: 1% 2%;
background-color: var(--blue);

 @media (max-width: 800px){
    width: 100vw;
    height: auto;
 }
`;

function Aside() {
    return (
        <AsideWrapper>
            
        </AsideWrapper>
    )
}

export default Aside
