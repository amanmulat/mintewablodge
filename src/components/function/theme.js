import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    palette : {
        primary :{
            main : "#f4a460",
            light : '#fff'
        },
        secondary :{
            main :'#000000'
        }
    
    }
});

theme.overrides ={
    MuiInput:{
        underline: {
         
            '&:after': {
                borderBottom: `3px solid #f4a460`
            }
        },
    },
    // MuiInputBase:{
    //     input:{
    //         color : 'azure'
    //     }
    // }
    
}

export default theme