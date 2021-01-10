import React from 'react';
import navLink from './link'
import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from 'react-router-dom'


export const Sidedrawer = (props) =>{
    let drawerclasses = 'side-drawer';
    
    if(props.show){
        drawerclasses ='side-drawer open';

    }

    return(
    
            <ul className={drawerclasses}> 
               { 
               navLink.map((link , index )=> (
                    <li key = {index}  >
                        
                    <Link to ={link.path}
                    onClick={props.click}
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                        >
                         {link.title} 
                        </Link>
                     
                    </li>
                )) 
                }
            </ul>
    
)
    }