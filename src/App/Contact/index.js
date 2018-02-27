import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    height: 100vh;
    background: rgba(49, 49, 48, 0.5);
`


function Contact(props){
    return(
        <Wrapper id='contact'>
            <h1>Contact</h1>
            <form action="">
                <input placeholder="Name" type="text"/>
                <input placeholder="Email" type="text"/>
                <input placeholder="Question..." type="text"/>
                <button>Submit</button>
            </form>
            <a href="https://www.linkedin.com/in/lukebarrett1/">LinkedIn</a>
        </Wrapper>
    )
}
export default Contact;
