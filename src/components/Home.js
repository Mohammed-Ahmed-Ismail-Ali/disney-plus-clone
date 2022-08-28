import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Movies from './Movies'

function Home() {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  width: 100%;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    background: url('./images/home-background.png') center center / cover no-repeat fixed;
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`