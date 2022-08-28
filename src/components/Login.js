import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <Wrap>
        <img src="./images/cta-logo-one.svg" alt="" />
        <Button>
          Get All There
        </Button>
        <p>Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla.</p>
        <img src="./images/cta-logo-two.png" alt="" />
      </Wrap>
    </Container>
  )
}

export default Login

const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100vw;
  background-image: url('./images/login-background.jpg');
  background-size: cover;
  background-position: center;
  padding: 0 calc(3.5vh + 5px);
  display: flex;
  align-items: center;
  justify-content: center;
  // background-repeat: no-repeat;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  
  img {
    width: 90%;
    height: 90%;

    @media (max-width: 767px) {
      width: 100%;
      height: 100%;
    }
  }
  
  p {
    text-align: center;
    color: rgb(249 249 249);
    width: 98%;
    line-height: 1.4;

    @media (max-width: 950px) {
      font-size: 12px;
      line-height: 1.6;
      width: 90%;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`

const Button = styled.button`
  width: 100%;
  text-transform: uppercase;
  color: rgb(249 249 249);
  background-color: rgb(0 95 255);
  border: none;
  cursor: pointer;
  padding: 12px 0;
  border-radius: 6px;
  transition: 0.4s;

  &:hover {
    transform: scale(1.05);
  }
`