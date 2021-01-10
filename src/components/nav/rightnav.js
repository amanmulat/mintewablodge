import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import navLink from './link';
import { useContext } from 'react';
import AuthContext from '../../context/auth-context'

const Ul = styled.ul`
  list-style: none;
  z-index : 19;
  display: flex;
  flex-flow: row nowrap;
  align-items : center;
  padding: 15px 0px;
  margin : 0;
  .clearit{
    background-color: Transparent;
    color : sandybrown;
    padding : 0;
    margin : 0;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
  }
  clearit:hover {
  
      color : rgb(255, 193, 139);;
    
  }
  li {
     padding: 0 10px;
    align-items : center;
   
    a{
  text-decoration : none;
    color : sandybrown; 
    }
    a:hover{
      color : rgb(255, 193, 139);;
    }
    a.active{
      color : rgb(255, 193, 139);
    }
  }

  @media (max-width: 768px) {
    
    flex-flow: column nowrap;
    background-color:white;
    position: fixed;
    justify-content : space-evenly;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    max-width : 80%;
    padding-bottom: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: sandybrown;
       padding: 15px 10px;
    }
    
  }
`;

const RightNav = ({ open , linkClickClose  }) => {
const context = useContext(AuthContext)

  return (
    <Ul open={open}>
                  { navLink.map((link , index )=> (
                        <li key = {index}  >
                            <Link  to ={link.path} 
                            onClick={linkClickClose}
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "end"})}
                            >
                            {link.title} 
                            </Link>
                        </li>
                    )) }
                  {context.token && (
                    <React.Fragment>
                    <li>
                      <Link to={"/roomauth"}>
                        Create Rooms
                      </Link>
                    </li>
                    <li>
                    <Link to={"/bookings"}>
                        Bookings
                      </Link>
                    </li>
                     <li>
                      <Link onClick={context.logout}>
                        Logout
                      </Link>
                    </li>
                    </React.Fragment>
                    )}

    </Ul>
  )
}

export default RightNav