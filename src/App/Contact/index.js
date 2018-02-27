import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    height: 100vh;
    color: white;
    background: rgba(49, 49, 48, 0.5);
`
const Content = styled.div`
    display: grid;
    height: 100vh;
`
const Main = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 /3;
`
const Form = styled.form`
    display: grid;
    width: 200px;
`

function Contact(props) {
    return (
        <Wrapper id='contact'>
            <Content>
                <Main>
                <h1>Contact</h1>
                <Form action="">
                    <input placeholder="Name" type="text" />
                    <input placeholder="Email" type="text" />
                    <input placeholder="Question..." type="text" />
                    <button>Submit</button>
                </Form>
                <a href="https://www.linkedin.com/in/lukebarrett1/">LinkedIn</a>
                </Main>
            </Content>
        </Wrapper>
    )
}
export default Contact;
