import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  top:0;
  position : fixed;
  z-index: 10;
  ${({ inView }) => inView ? 
  'background-color : white;' : 
  'background-image: linear-gradient(rgba(0, 0 , 0 , 0.4), rgba(255, 255 , 255 , 0));'
}

  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items : center;


  .lela{
      display : flex;
      justify-content : space-between;
      align-items : center;
  }
  .logo {
    padding: 15px 0;
    text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 20px;
        color: sandybrown;
       a{
        text-decoration : none;
        color : inherit;
       }
  }
  .navScrollClass {
    background-color : white ; 
  }
  
`


const Navbar = (props) => {
  return (
    <Nav inView={props.inView}>
      <div className=  "container lela" >
        <div  className="logo" >
           <Link to='/#home'
            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "end"})}
           >Mintewab Lodge </Link>
        </div>
        <Burger />
     </div>
    </Nav>
  )
}

export default Navbar