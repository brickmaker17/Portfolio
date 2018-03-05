import React from 'react';
import styled from 'styled-components';
import Local from '../images/localEvenings.png';
import Workout from '../images/workout.png';
import Full from '../images/fullstack.png';

const Project = styled.div`
    display: flex;
    width: 70vw;
    
`;
const Link = styled.div`
    display: grid;
    grid-template-rows: auto 30px 30px;
    margin-left: 20px;
`;

function Projects() {
    return (
        <div>
            <Project>
                <img src={Local} alt="Pic of frontend website" />
                <Link>
                    <p>This is built with HTML & CSS using visual studio code. The most challanging part of building this was linking to the diffrent pages. The best part of building this was the styling.</p>
                    <form>
                        <button formAction="https://confident-mestorf-46653c.netlify.com/">Site</button>
                    </form>
                    <form>
                        <button formAction="https://github.com/brickmaker17/business-time">Github</button>
                    </form>
                </Link>
            </Project>
            <br />
            <Project>
                <img src={Workout} alt="Pic of group full stack project" />
                <Link>
                    <p>This is built with reactjs, readux, javascript, HTML & CSS. This was a group project that used github.</p>
                    <form>
                        <button formAction="">Github</button>
                    </form>
                </Link>
            </Project>
            <br />
            <Project>
                <img src={Full} alt="Pic of full stack personal project" />
                <Link>
                    <p>This if a fully C.R.U.D. personal project built with reactjs.</p>
                    <form>
                        <button formAction="https://suspicious-heyrovsky-bc9347.netlify.com/">Site</button>
                    </form>
                    <form>
                        <button formAction="https://github.com/brickmaker17/local-evenings">Github</button>
                    </form>
                </Link>
            </Project>
        </div>
    );
}

export default Projects;