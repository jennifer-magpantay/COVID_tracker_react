import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';

const InfoWrapper = styled.div`
width: 18vw;
height: auto;
margin-right: 1%;
background-color: var(--lg-color);
border: 1px solid var(--lg-gray);
border-radius: 4px;
`;

function InfoBox() {
    return (
        <Wrapper>
        <InfoWrapper>
            LOREM
        </InfoWrapper>
        <InfoWrapper>
            LOREM
        </InfoWrapper>
        <InfoWrapper>
            MOREM
        </InfoWrapper>
        </Wrapper>
    );
}

export default InfoBox;
