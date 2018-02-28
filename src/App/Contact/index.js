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
    grid-row-gap: 4px;
    border: none;
    width: 350px;
`
const Cont = styled.h1`
    font-size: 3vw;
`
const But = styled.button`
    margin-top: 5px;
    width: 60px;
`
const StyledInput = styled.input`
    height: 28px;
    width: 100%;
`
const SubHead = styled.h4`
    margin: 10px;
`
const TextBox = styled.textarea`
    height: 100px;
`

function Contact(props) {
    return (
        <Wrapper id='contact'>
            <Content>
                <Main>
                    <Cont>Contact</Cont>
                    <SubHead>Have a questions or want to work together?</SubHead>
                    <Form method="post">
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <input type="text" name="name" placeholder="Name" />
                        </p>
                        <p>
                            <input type="email" name="email" placeholder="Enter email" />
                        </p>
                        <p>
                            <TextBox name="message" placeholder="Your Message"></TextBox>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </Form>
                    <a href="https://www.linkedin.com/in/lukebarrett1/">LinkedIn</a>
                </Main>
            </Content>
        </Wrapper>
    )
}
export default Contact;
