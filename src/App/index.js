import React from 'react';
import Nav from './Nav/index';
import styled from 'styled-components';
import Main from './Main/index';
import {Switch, Route} from 'react-router-dom';
import About from './About/index';
import Contact from './Contact/index';
import '../styles/app.css';


const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 3;
    height: 100%;
`;

function App(props) {
    return (
        <Wrapper>
            <Nav/>
            <Switch>
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/' component={Main} />
            </Switch>
        </Wrapper>
    )
}

export default App;