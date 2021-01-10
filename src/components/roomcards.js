import React, { useEffect  } from 'react'
import {RoomCard} from './roomcard'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0),
        backgroundColor : 'rgba(255, 255, 255, 0)',
       
      },
  }));


export const RoomCards =props=> {
    
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    useEffect(() => {
        setChecked(true)
        
    }, [])
    
return (  
<div className='roomcards'>
    {
         props.rooms.map(room=> {
             
                 return (<Grow in={checked}
                    style={{ transformOrigin: '0 0 0 0' }}
                    {...(checked ? { timeout: 500 } : {})}
                    >
                        <Paper elevation={0} className={classes.root}>
                            <RoomCard
                             
                             imgsrc={room.imgsrc} 
                             imgalt={room.roomType} 
                             title ={room.roomType} 
                             description={room.Description} 
                             price={room.Price}/>
                        </Paper>
                    </Grow>
                    )
             
        
            }) 
        
    }
</div>
    )
}