import React from 'react';
import styled from 'styled-components';
import Me from '../images/me.JPG';


const Wrapper = styled.section`
    display: grid;
    color: white;
    background: rgba(135, 97, 67, 0.5);
    height: 100vh;
    grid-template-columns: 60px 1fr
    grid-template-rows: auto ;
    grid-template-areas:
        'm c'
    
`
const Main = styled.div`
    grid-area: m;
    margin-top: 60px;
`
const Image = styled.img`
    border-radius: 50%;
    height: 200px;
    
`

function About(props) {
    return (
        <Wrapper id="about">
            <Main>
                <h1>About Me</h1>
                <Image src={Me} alt="Pic of me" />
            </Main>
        </Wrapper>
    )
}
export default About;