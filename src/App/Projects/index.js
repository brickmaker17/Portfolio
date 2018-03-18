import React from 'react';
import styled from 'styled-components';
import Local from '../images/localEvenings.png';
import Workout from '../images/workout.png';
import Full from '../images/fullstack.png';

const Wrapper = styled.section`
    height: 100vh;
    color: white;
    background: rgba(49, 49, 48, 0.5);
`;
const Project = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    padding-top: 30px;
    width: 70vw; 
`;
const Link = styled.div`
    display: grid;
    grid-template-rows: 28px 20px auto auto auto;
    margin-left: 20px;
`;
const Heading = styled.h1`
    margin-top: 20px;
`;
const Tag = styled.a`
    text-decoration: none;
    margin 10px;
    background: linear-gradient(to bottom, rgba(149,149,149,1) 0%,rgba(13,13,13,1) 46%,rgba(1,1,1,1) 50%,rgba(10,10,10,1) 53%,rgba(78,78,78,1) 76%,rgba(56,56,56,1) 87%,rgba(27,27,27,1) 100%);
    color: white;
    width: 35px;
    height: 20px;
    text-align: center;
    border-radius: 4px;
        :active{
            text-decoration: none;
            margin 10px;
            background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(241,241,241,1) 50%,rgba(225,225,225,1) 51%,rgba(246,246,246,1) 100%);
            color: black;
            width: 35px;
            height: 20px;
            text-align: center;
            border-radius: 4px;
        }
`;

function Projects() {
    return (
        <Wrapper id="projects">
            <Heading>Projects</Heading>
            <Project>
                <img src={Local} alt="Pic of frontend website" />
                <Link>
                    <h1>Local Evenings</h1>
                    <h5>HTML, CSS</h5>
                    <p>This is built with HTML & CSS using visual studio code. The most challanging part of building this was linking to the diffrent pages. The best part of building this was the styling.</p>
                    <Tag role="button" href="https://confident-mestorf-46653c.netlify.com/">Site</Tag>
                    <Tag role="button" href="https://github.com/brickmaker17/business-time">Git</Tag>
                </Link>
            </Project>
            <Project>
                <img src={Workout} alt="Pic of group full stack project" />
                <Link>
                    <h1>Fit</h1>
                    <h5>HTML, CSS, JAVASCRIPT, REACT and REDUX</h5>
                    <p>This is built with reactjs, readux, javascript, HTML & CSS. This was a group project that used github.</p>
                    <Tag role="button" href="https://github.com/celesterobinson/fit">Git</Tag>
                </Link>
            </Project>
            <Project>
                <img src={Full} alt="Pic of full stack personal project" />
                <Link>
                    <h1>Local Evenings</h1>
                    <p>This if a fully C.R.U.D. personal project built with reactjs.</p>
                    <Tag role="button" href="https://suspicious-heyrovsky-bc9347.netlify.com/">Site</Tag>
                    <Tag role="button" href="https://github.com/brickmaker17/local-evenings">Git</Tag>
                </Link>
            </Project>
        </Wrapper>
    );
}

export default Projects;