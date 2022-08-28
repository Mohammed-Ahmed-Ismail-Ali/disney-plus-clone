import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="./images/image2.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="./images/image2.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="./images/image2.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="./images/image2.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="./images/image2.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="./images/image2.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="./images/image2.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="./images/image2.jpg" alt="" />
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
`

const Content = styled.div`
  margin: 30px 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: 0.3s;
  cursor: pointer;
  border: 3px solid rgb(249 249 249 / 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgb(249 249 249 / 0.8);
  }
`