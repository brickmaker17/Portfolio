import React from 'react';
import styled from 'styled-components';
import Me from '../images/me.JPG';
import Projects from '../Projects/index';


const Wrapper = styled.section`
    display: grid;
    color: white;
    background: rgba(135, 97, 67, 0.5);
    height: 100vh;
    grid-template-columns: 25% 1fr;
    grid-template-rows: auto ;
    grid-template-areas:
        'm c'
    
`
const Main = styled.div`
    grid-area: m;
    margin-left: 20px;
    margin-top: 60px;
`
const Image = styled.img`
    border-radius: 50%;
    height: 200px;
    
`
const Content = styled.div`
    margin-top: 60px;
    margin-left: 20px;
    grid-area: c;
`

function About(props) {
    return (
        <Wrapper id="about">
            <Main>
                <h1>About Me</h1>
                <p>I am a VSchool Graduate who learned the Mern Stack. While in school I have expanded my learning and studdied Styled-Components. 
                    My passion for Web Development comes from the challange and reward that it brings when you are able to overcome the problomes that are presented.</p>
                <Image src={Me} alt="Pic of me" />
            </Main>
            <Content>
                <Projects />
            </Content>
        </Wrapper>
    )
}
export default About;