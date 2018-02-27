import React from 'react'
import styled from 'styled-components';
import Local from '../images/localEvenings.png';
import Workout from '../images/workout.png';

function Projects(){
    return(
        <div>
            <img src={Local} alt="Pic of frontend website"/>
            <br/>
            <img src={Workout} alt="Pic of group full stack project"/>
        </div>
    )
}

export default Projects;