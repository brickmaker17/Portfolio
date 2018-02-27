import React from 'react'
import Workout from "../images/workout.png";
import Local from '../images/localEvenings.png';
import Full from '../images/fullstack.png';
import styled from 'styled-components';
import Canvas from '../Canvas/index';
import Typing from '../images/typing.mp4';

const ImgWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    
`
const Videocont = styled.div`
    position: fixed;
    z-index: -1;
`
const Video = styled.video`
    height: auto;
    vertical-align: middle;
    width: 100%;
    
`

const Body = styled.div`
    height: 100vh;
    width: 100vw;
    
`

const Overlay = styled.div`
    display: grid;
    height: 100vh;
    
    
    
    color: white;
    
`
const Name = styled.h1`
    grid-column: 2 / 3;
    grid-row: 2 /3;
    font-size: 9vw;
    
    justify-content: center;
`

function Main() {
    return (
        <div>
            {/* <Body> */}
            <Videocont>
                <Video video autobuffer loop autoPlay>
                    <source src={Typing} type="video/mp4" />
                </Video>
            </Videocont>
            <Overlay>
                <Name>Luke Barrett</Name>
            </Overlay>
            {/* </Body> */}
        </div>
    )
}

export default Main;