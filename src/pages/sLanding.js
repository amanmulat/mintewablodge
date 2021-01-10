import React, { useState  ,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import bg from '../assets/front-gate.jpg'
// import bg from '../assets/37.jpg'
import BigText from '../components/bigtext/largetext'
import { Collapse } from '@material-ui/core';
// import SortIcon from '@material-ui/icons/Sort';
import 'date-fns';
import {Container} from 'react-bootstrap';

import { ThemeProvider } from "@material-ui/core";
import theme from '../components/function/theme'
import '../scss/slanding.scss'

const useStyles = makeStyles((theme)=>({
  
    sroot : {
        display : "flex",
        alignItems : 'center',
        height : '100vh',
        
        
    },
    
      collapse :{
         
          alignItems : "center",
          width : '100%'
      },

}));

export default function Header(){
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true)
    }, [])
    const classes = useStyles();
    return(

        <ThemeProvider theme={theme}>  
        <Collapse in={checked} 
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight = {80}
        > 
        <div  className="slanding" id="home">
            <div className={classes.sroot}>

                 
                    <Collapse in={checked} 
                    {...(checked ? { timeout: 1500 } : {})}
                    collapsedHeight = {80}
                    className={classes.collapse}
                    > 
                   <Container>
                    <BigText/>

                    </Container>
               
                    </Collapse>
            </div>
        </div>
        </Collapse>
        </ThemeProvider>
        
    )
}