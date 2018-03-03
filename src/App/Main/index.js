import React from 'react'
import Workout from "../images/workout.png";
import Local from '../images/localEvenings.png';
import Full from '../images/fullstack.png';
import styled from 'styled-components';
// import Canvas from '../Canvas/index';
import Typing from '../images/typing.mp4';
import About from '../About/index';

const Videocont = styled.div`
    position: fixed;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: -1;
`
const Video = styled.video`
    width: 100vw;
    @media (max-width: 1686px){
        
        width: 1686px;
    }
    
    
`
const Overlay = styled.div`
    display: grid;
    height: 100vh;
    color: white;
    
    
`
const Title = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 /3;
    justify-content: center;
`
const Name = styled.h1`
    font-size: 9vw;
`
const Subtitle = styled.h3`
    font-size: 4vw;
    text-align: center;
`
const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    
`

function Main() {
    return (
        <Grid id="home">
            <div>
                <Videocont>
                    <Video video autobuffer loop autoPlay>
                        <source src={Typing} type="video/mp4" />
                    </Video>
                </Videocont>
                <Overlay>
                    <Title>
                        <Name>Luke Barrett</Name>
                        <Subtitle>Web Developer</Subtitle>
                    </Title>
                </Overlay>
            </div>
        </Grid>
    )
}

export default Main;