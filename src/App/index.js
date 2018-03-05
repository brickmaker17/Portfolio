import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav/index';
import Main from './Main/index';
import About from './About/index';
import Contact from './Contact/index';
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
                <Route path="/contact" component={Contact} />
            </Switch>
            <About />
            <Contact />
        </Wrapper>
    );
}

export default App;