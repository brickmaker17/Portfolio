import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav/index';
import Main from './Main/index';
import About from './About/index';
import Projects from './Projects/index';
import '../styles/app.css';


const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1;
    overflow: scroll;
    height: 100vh;
    
`;

function App() {
    return (
        <Wrapper>
            <Nav />
            <Switch>
                <Route path="/" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Projects} />
            </Switch>
            <Projects />
            <About />
        </Wrapper>
    );
}

export default App;