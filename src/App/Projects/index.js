import React from 'react'
import styled from 'styled-components';
import Local from '../images/localEvenings.png';
import Workout from '../images/workout.png';
import Full from '../images/fullstack.png';

const Project = styled.div`
    display: flex;
    width: 1000px;
`
const Link = styled.div`
    display: grid;
    grid-template-rows: auto 30px 30px;
`

function Projects() {
    return (
        <div>
            <Project>
                <img src={Local} alt="Pic of frontend website" />
                <Link>
                <p>This was a HTML & CSS site built in visual studio. The most challanging part of building this was linking to the diffrent pages.
                    The best part of building this was the styling.
                </p>
                <form>
                    <button formAction="https://confident-mestorf-46653c.netlify.com/">Site</button>
                </form>
                <form>
                    <button formAction="https://github.com/brickmaker17/business-time">Github</button>
                </form>
                </Link>
            </Project>
            <br />
            <img src={Workout} alt="Pic of group full stack project" />
            <br />
            <img src={Full} alt="Pic of full stack personal project" />
        </div>
    )
}

export default Projects;