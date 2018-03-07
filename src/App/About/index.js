import React from 'react';
import styled from 'styled-components';
import Me from '../images/me.JPG';


const Wrapper = styled.section`
    display: grid;
    color: white;
    background: rgba(135, 97, 67, 0.5);
    height: 100vh;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr ;
    @media (max-width: 414px){
        grid-template-areas:
        'm'
        'c'
    }
    grid-template-areas:
        'm c'
`;
const Main = styled.div`
    grid-area: m;
    align-self: center;
    margin-left: 20px;
   
    @media (max-width: 414px){
        height: 200px;
    }
`;
const Image = styled.img`
    border-radius: 50%;
    height: 200px;
    
`;
const Content = styled.div`
    grid-area: c;
    align-self: center;
    margin-left: 20px;
`;
const Form = styled.form`
    display: grid;
    grid-row-gap: 4px;
    border: none;
    width: 350px;
`;
const Cont = styled.h1`
    font-size: 3vw;
`;
const But = styled.button`
    margin-top: 5px;
    width: 60px;
`;
const StyledInput = styled.input`
    height: 28px;
    width: 100%;
`;
const SubHead = styled.h4`
    margin: 10px;
`;
const TextBox = styled.textarea`
    height: 100px;
    width: 100%;
`;

function About() {
    return (
        <Wrapper id="about">
            <Main>
                <h1>About Me</h1>
                <p>I am a VSchool Graduate who learned the Mern Stack. While in school I have expanded my learning and studied Styled-Components. My passion for Web Development comes from the challenge and reward that it brings when you are able to overcome the problems that are presented.</p>
                <Image src={Me} alt="Pic of me" />
                <a href="https://www.linkedin.com/in/lukebarrett1/">LinkedIn</a>
            </Main>
            <Content>
                <div>
                    <Cont>Contact</Cont>
                    <SubHead>Have a questions or want to work together?</SubHead>
                    <Form method="post">
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <StyledInput type="text" name="name" placeholder="Name" />
                        </p>
                        <p>
                            <StyledInput type="email" name="email" placeholder="Enter email" />
                        </p>
                        <p>
                            <TextBox name="message" placeholder="Your Message" />
                        </p>
                        <p>
                            <But type="submit">Send</But>
                        </p>
                    </Form>
                </div>
            </Content>
        </Wrapper>
    );
}
export default About;