/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo>
        <a href="index.html">
          <img src="./images/logo.svg" alt="logo"/>
        </a>
      </Logo>
      <NavMenu>
        <a href="index.html">
          <img src="./images/home-icon.svg" />
          <span>Home</span>
        </a>
        <a href="#">
          <img src="./images/search-icon.svg" />
          <span>Search</span>
        </a>
        <a href="#">
          <img src="./images/watchlist-icon.svg" />
          <span>Watchlist</span>
        </a>
        <a href="#">
          <img src="./images/original-icon.svg" />
          <span>Originals</span>
        </a>
        <a href="#">
          <img src="./images/movie-icon.svg" />
          <span>Movies</span>
        </a>
        <a href="#">
          <img src="./images/series-icon.svg" />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImage src="./images/image.jpg"/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  overflow-x: hidden;
`

const Logo = styled.div`
  min-width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // flex: 1;
  // margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 12px;

    &:hover {
      span::after {
        width: 100%;
        opacity: 1;
      }
    }

    img {
      height: 20px;
    }

    span {
      color: white;
      font-size: 13px;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -8px;
        height: 2px;
        width: 0%;
        background-color: white;
        opacity: 0;
        transition: 0.45s;
      }
    }
  }
  
  @media (max-width: 815px) {
    display: none;
  }
`

const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`