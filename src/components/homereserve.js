import React, { useContext, useState  } from 'react'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "../scss/homereserve.css"
import { Link } from 'react-router-dom'
import { ThemeProvider } from "@material-ui/core";
import theme from './function/theme'
import AuthContext from '../context/auth-context'

export default function Header(){  
const context = useContext(AuthContext)
let checkin 
let checkout 
if((context.checkin || context.checkout) === null){
  checkin = new Date()
  let tmr = new Date()
   tmr.setDate(checkin.getDate() + 1)
   console.log(tmr)
  checkout = tmr
}else {
  checkin = context.checkin
  checkout = context.checkout 
}

  const [checkinDate, setCheckinDate] = useState(checkin);
  const [checkoutDate, setCheckoutDate] = useState(checkout);

  const handleCheckinDateChange = (date) => {
    if(date!==null){
      setCheckinDate(date);  
      console.log(date.setHours(0 , 0 , 0 , 0))
      checkoutDate.setHours(0 , 0 , 0 , 0)

      if(date.getTime() >= checkoutDate.getTime() ){
        var followingDay = new Date(date.getTime() + 86400000)
        setCheckoutDate(followingDay)
      }
    }  
  };
  const handlecheckoutDateChange = (date) => {
      setCheckoutDate(date);
  };
  context.dateVisiting(checkinDate , checkoutDate)

  const [guests, setGuests] = React.useState('');

  const handleChange = (event) => {
      setGuests(event.target.value);
  };
  return(
  
            <ThemeProvider theme={theme}>   
            <div className='booknow'>
                <h4 >Book Now</h4>
                  <div className="book row">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around" alignItems="center"  >
                            <div className="col-lg-6">
                              <KeyboardDatePicker
                                className='sizer'
                                margin="normal"
                                id="date-picker-dialog-check-in"
                                label="Check In"
                                format="MM/dd/yyyy"
                                color ="primary"
                                value={checkinDate}
                                minDate={new Date()}
                                onChange={handleCheckinDateChange}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                                />
                            </div>  
                            
                            <div className="col-lg-6" >
                                <KeyboardDatePicker
                                className='sizer'
                                margin="normal"
                                id="date-picker-dialog-check-out"
                                label="Check Out"
                                format="MM/dd/yyyy"
                                color ="primary"
                                value={checkoutDate}
                                minDate={new Date().setDate(checkinDate.getDate() + 1)}
                                onChange={handlecheckoutDateChange}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                                />
                            </div>
                        </Grid>
                    </MuiPickersUtilsProvider> 
                        <Grid container justify="space-around" alignItems="center"  >
                              <div className="col-lg-6" >
                                <FormControl className="sizer">
                                    <InputLabel id="demo-simple-select-helper-label">Guests</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={guests}
                                    onChange={handleChange}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>1 Adult</MenuItem>
                                    <MenuItem value={20}>2 Adults</MenuItem>
                                    <MenuItem value={30}>3 Adults</MenuItem>
                                    </Select>
                                    {/* <FormHelperText>Some important helper text</FormHelperText> */}
                                </FormControl>
                              </div>
                          
                            <div className="col-lg-6" >
                                <Link to='/rooms' className= "btnbtn sizer">
                                    Check Availablity
                                </Link >
                            </div>
                        </Grid>
                </div>
              </div>
                
          
            </ThemeProvider>  
         
        )
      }