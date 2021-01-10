import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './rightnav';
import Backdrop from './backdrop'

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.15rem;
    background-color: ${({ open }) => open ? 'rgb(179, 124, 76)' : 'sandybrown'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  const moreOnClick =()=>{
    setOpen(!open)
  }
  return (
    <>
      <StyledBurger open={open} onClick={moreOnClick}>
        
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} linkClickClose = {()=>{
        setOpen(false)
      }}/>
      {open && <Backdrop click = {moreOnClick}/>}
    </>
  )
}
export default Burger