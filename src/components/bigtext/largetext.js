import React from 'react'
import './largetext.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StylesProvider } from "@material-ui/core/styles";
import { IconButton } from '@material-ui/core';
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
// import '../../scss/form.scss'
const bigText = ()=>{
    return(
       
        <div className="bigtext container">
            <h1 className="mintewab">
                Mintewab
            </h1>
            <h2 className="lodge">
                Lodge
            </h2>
            <div className="downwardarrow">
                <StylesProvider injectFirst>
                       <Link to='/#bookroom'
                          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "end"})}
                        >
                    <IconButton  to='/rooms' >
                     
                            <ExpandMoreIcon fontSize="large" />
                      
                    </IconButton>
                      </Link>
                </StylesProvider>
            </div>
            
        </div>
       
        
    )
}

export default bigText