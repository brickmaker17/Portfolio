import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    height: 100vh;
    background: green;
`


function Contact(props){
    return(
        <Wrapper id='contact'>
            <h1>Contact</h1>
        </Wrapper>
    )
}
export default Contact;
