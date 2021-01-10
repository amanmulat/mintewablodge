import React  from 'react'
import  {Burger} from './burger'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import navLink from './link';


export const  Navigation = (props) =>  {
    return( 

    <div className="navbarr">
        <nav>
            <div className='logo'>
                <h4>Mintewab Lodge</h4>
            </div>
            <ul className="navlinklink ">
                { navLink.map((link , index )=> (
                        <li key = {index}  >
                            <Link to ={link.path} 
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "end"})}
                            >
                            {link.title} 
                            </Link>
                        </li>
                    )) }
            </ul>

            <Burger  click={props.drawerClickHandler} />
            
        </nav>
    </div>
      
   
    )
}
  


