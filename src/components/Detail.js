import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="./images/image2.jpg" alt="" />
      </Background>
      <ImageTitle>
        <img src="./images/logo.svg" alt=""/>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="./images/play-icon-black.png" alt=""/>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="./images/play-icon-white.png" alt=""/>
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="./images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2018 <strong>&middot;</strong> 7m <strong>&middot;</strong> Family, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
        A Chinese mom who's sad when her grown son leaves home gets another<br/>chance at motherhood when one of her dumplings springs to life. But she finds<br/>that nothing stays cute and small forever.
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh- 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249 249 249);
  border: none;
  cursor: pointer;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  transition: 0.2s;

  &:hover {
    background-color: rgb(198 198 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background-color: rgb(0 0 0 / 0.3);
  color: rgb(249 249 249);
  border: 1px solid rgb(249 249 249);
  text-transform: uppercase;

  &:hover {
    background-color: rgb(198 198 198 / 0.5);
  }
`

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgb(249 249 249);
  border-radius: 50%;
  background-color: rgb(0 0 0 / 0.6);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: rgb(198 198 198 / 0.5);
  }

  span {
    font-size: 30px;
    color: rgb(249 249 249);
  }

  @media (max-width: 434px) {
    margin-top: 20px;
  }
`

const GroupWatchButton = styled(AddButton)`
  background-color: black;
`

const SubTitle = styled.div`
  margin-top: 26px;
  font-size: 15px;
  color: rgb(249 249 249)
  min-height: 20px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249 249 249);
`