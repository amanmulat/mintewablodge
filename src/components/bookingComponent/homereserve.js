import React, { useContext, useState  } from 'react'
import 'date-fns';

import { StylesProvider } from "@material-ui/core/styles";
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
import { Link } from 'react-router-dom'
import { ThemeProvider } from "@material-ui/core";
import theme from '../../components/function/theme'
import AuthContext from '../../context/auth-context'

import './homereserve.scss'

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
  <div className="bookHorizontal" id="bookroom">
    <div className="container ">

            <ThemeProvider theme={theme}>  
            <StylesProvider injectFirst>
              
            <div className='booknoww'>
                <h4 >Book Now</h4>
                  <div className="book row">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <div className="col-md-6 col-lg-3 items-reserve">
                            <div className="forPadding">
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
                          </div>
                            
                          <div className="col-md-6 col-lg-3 items-reserve" >
                            <div className="forPadding">

                                <KeyboardDatePicker
                                className='sizer'
                                margin="normal"
                                id="date-picker-dialog-check-out"
                                label="Check Out"
                                format="MM/dd/yyyy"
                                color ="primary"
                                value={checkoutDate}
                                minDate={checkinDate.getTime() + 86400000}
                                onChange={handlecheckoutDateChange}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                                />
                            </div>
                          </div>
                    </MuiPickersUtilsProvider> 
                        
                            <div className=" col-md-6 col-lg-3 items-reserve dropdownGuests" >
                              <div className="forPadding">
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
                            </div>
                          
                            <div className="col-md-6 col-lg-3 items-reserve  removeRightBorder"  >
                              <div className="forPadding">
                                  <Link to='/auth' className= "btnbtn sizer">
                                      Check Availablity
                                  </Link >
                              </div>
                            </div>
                        
                </div>
              </div>
                
              </StylesProvider> 
            </ThemeProvider>    
            </div>
            </div>
         
        )
      }