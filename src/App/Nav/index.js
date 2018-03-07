import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const SNav = styled.div`
    display: grid;
    position: absolute;
    height: 50;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    backgroundColor: transparent;
    border: none;
    width: 100vw;
    height: 60px;
    
`;
const StyledLink = styled(Link)`
    color: white;
    font-size: 30px;
    text-decoration: none;
    justify-self: center;
    align-items: center;
    :hover {
        border-radius: 5px;
        background-color: #555;
        color: white;
    }
`;


function Nav() {
    return (
        <SNav>
            <StyledLink smooth="true" to="/#home">Home</StyledLink>
            <StyledLink smooth="true" to="/#about">About</StyledLink>
            <StyledLink smooth="true" to="/#projects">Projects</StyledLink>
        </SNav>
    );
}

export default Nav;