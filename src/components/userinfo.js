import React, { createRef, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { Spinner } from "./Spinner/Bigspinner";
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import { Link } from 'react-router-dom'
import { StylesProvider } from "@material-ui/core/styles";
import "../scss/userinfo.scss";
import MuiPhoneNumber from "material-ui-phone-number";
import AuthContext from "../context/auth-context";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/core";
import theme from "./function/theme";
import "date-fns";

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(-1),
//       marginRight : theme.spacing(0)
//     },
//     option: {
//       fontSize: 15,
//       '& > span': {
//         marginRight: 10,
//         fontSize: 18,
//       },
//     }

//   }));
// *************************
// *****************
// *************
// ***********
// *****
// ****z
// ****

export const UserInfo = (props) => {
  const context = useContext(AuthContext);
  let checkin;
  let checkout;
  if ((context.checkin || context.checkout) === null) {
    checkin = new Date();
    let tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);
    checkout = tmr;
  } else {
    checkin = context.checkin;
    checkout = context.checkout;
  }

  const [checkinDate, setCheckinDate] = React.useState(checkin);
  const [checkoutDate, setCheckoutDate] = React.useState(checkout);
  const [spinner, setSpinner] = React.useState(false);
  const handleCheckinDateChange = (date) => {
    if (date !== null) {
      date.setHours(0, 0, 0, 0);
      checkoutDate.setHours(0, 0, 0, 0);

      if (date.getTime() >= checkoutDate.getTime()) {
        var followingDay = new Date(date.getTime() + 86400000);
        setCheckoutDate(followingDay);
      }
      setCheckinDate(date);
    }
  };
  const handlecheckoutDateChange = (date) => {
    if (date !== null) {
      setCheckoutDate(date);
    }
  };
  context.dateVisiting(checkinDate, checkoutDate);

  const [prefix, setPrefix] = React.useState("");
  const handlePrefixChange = (event) => {
    setPrefix(event.target.value);
  };
  const firstNameElement = createRef();
  const lastNameElement = createRef();
  const emailElement = createRef();
  const [phone, setphone] = React.useState("");
  const handlePhoneChange = (value) => {
    setphone(value);
  };

  // **
  // **
  // ***
  // ****
  // *****
  // fuction to write the userinfo

  // const custmerInfoHandler = () => {
  //   setSpinner(true);
  //   const firstName = firstNameElement.current.value;
  //   const lastName = lastNameElement.current.value;
  //   const email = emailElement.current.value;
  //   const city = cityElement.current.value;

  //   const requestBody = {
  //     query: `
  //           mutation {
  //               createCustmer(custmerInput :
  //               { prefix : "${prefix}" ,
  //                 firstName : "${firstName}" ,
  //                 lastName :  "${lastName}" ,
  //                 email : "${email}" ,
  //                 phone : "${phone}" ,
  //                 country : "${CountryName}" ,
  //                 city : "${city}"
  //               })
  //                  {
  //                   _id
  //                 }
  //           }
  //       `,
  //   };

  //   fetch("https://aqueous-reaches-77121.herokuapp.com/", {
  //     method: "POST",
  //     body: JSON.stringify(requestBody),
  //     // for gql to work we need to tell it in which format we sending so header
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status !== 200 && res.status !== 201) {
  //         throw new Error("Failed");
  //       }
  //       return res.json();
  //     })
  //     .then((resData) => {
  //       let custmerId = resData.data.createCustmer._id;
  //       bookinghandler(custmerId);
  //     })
  //     .catch((err) => {});
  // };
  // **
  // ***
  // *****
  // *******
  // *********
  // **********
  // fuction to make a pending booking
  // const bookinghandler = (custmerId) => {
  //   const requestBody = {
  //     query: `
  //           mutation {
  //               bookRoom(bookingInput :{
  //                 roomSelected : "5ff48f4a1709182534e04036"
  //                 custmerId : "${custmerId}"
  //                 checkinDate : "${checkinDate}",
  //                 checkoutDate : "${checkoutDate}",
  //                 approved : false,
  //                 roomtype :  "${props.roomSelected}"
  //               } ) {
  //                   _id

  //                   createdAt
  //                   updatedAt
  //               }
  //           }
  //       `,
  //   };

  //   fetch("https://aqueous-reaches-77121.herokuapp.com/", {
  //     method: "POST",
  //     body: JSON.stringify(requestBody),
  //     // for gql to work we need to tell it in which format we sending so header
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + context.token,
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status !== 200 && res.status !== 201) {
  //         throw new Error("Failed");
  //       }
  //       return res.json();
  //     })
  //     .then((resData) => {
  //       context.roomSelect(null);
  //       setSpinner(false);
  //       context.booked(true);
  //     })
  //     .catch((err) => {});
  // };
  const custmerInfoAndBookingHandler = (event) => {
    setSpinner(true);
    event.preventDefault();
    const firstName = firstNameElement.current.value;
    const lastName = lastNameElement.current.value;
    const email = emailElement.current.value;
    const guests = context.guests;

    let message = `${prefix} ${firstName} ${lastName} %0Aphone : ${phone} %0Aemail : ${email} %0AGuests : ${guests} %0ACheckin Date : ${new Date(
      checkinDate
    ).toLocaleDateString("en-us")} %0ACheckout date : ${new Date(
      checkoutDate
    ).toLocaleDateString("en-us")} %0ARoom selected : ${props.roomSelected}`;

    let telegramToken = "5558945119:AAF1ctROyOlHIloBM3cR-D9ekiZbD8jia6w";
    let group_id = -680064351;
    let url = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${group_id}&text=${message}`;
    // let api = new XMLHttpRequest();
    // api.open("GET", url, true);
    // api.send();
    fetch(url)
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          context.errorBooked(true);
        }
        context.roomSelect(null);
        setSpinner(false);
        context.booked(true);
      })
      .catch((err) => {
        setSpinner(false);
        context.roomSelect(null);
        context.errorBooked(true);
      });
    // custmerInfoHandler();
  };

  // const classes = useStyles();

  return (
    <div className="container ">
      <h2>Reservation Online</h2>

      <form onSubmit={custmerInfoAndBookingHandler}>
        {spinner && <Spinner />}
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <div className="row ">
              <label className="col-md-12 yourstay">Your Stay </label>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className="col-md-12 col-lg-6 ">
                  <div className="forPadding">
                    <KeyboardDatePicker
                      className="sizerr"
                      margin="normal"
                      id="date-picker-dialog-check-in"
                      label="Check In"
                      format="MM/dd/yyyy"
                      color="primary"
                      value={checkinDate}
                      minDate={new Date()}
                      onChange={handleCheckinDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-12 col-lg-6 ">
                  <div className="forPadding">
                    <KeyboardDatePicker
                      className="sizerr"
                      margin="normal"
                      id="date-picker-dialog-check-out"
                      label="Check Out"
                      format="MM/dd/yyyy"
                      color="primary"
                      value={checkoutDate}
                      minDate={checkinDate.getTime() + 86400000}
                      onChange={handlecheckoutDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </div>
                </div>
              </MuiPickersUtilsProvider>

              <label className="col-md-12 contactInfo">Contact Info</label>

              <div className=" col-md-12 col-lg-6  ">
                <div className="contactInfoInput ">
                  <FormControl
                    // className={ classes.root  }
                    className="prefix"
                  >
                    <Select
                      required
                      value={prefix}
                      onChange={handlePrefixChange}
                      displayEmpty
                      // className={classes.selectEmpty}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="" disabled className="">
                        Mr.
                      </MenuItem>
                      <MenuItem value={"Mrs"}>Mrs.</MenuItem>
                      <MenuItem value={"Ms."}>Ms.</MenuItem>
                      <MenuItem value={"Mr."}>Mr.</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className="firstname"
                    required
                    inputRef={firstNameElement}
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6 ">
                <TextField
                  id="lastName"
                  type="text"
                  className="contactInfoInput"
                  placeholder="Last Name"
                  required
                  inputRef={lastNameElement}
                />
              </div>
              <div className="col-md-12 col-lg-6 ">
                <TextField
                  id="email"
                  type="email"
                  className="contactInfoInput"
                  placeholder="Email"
                  required
                  inputRef={emailElement}
                />
                {/* <input type ="email" placeholder="Email" required ref={emailElement} ></input> */}
              </div>
              <div className="col-md-12 col-lg-6 ">
                <div className="">
                  <MuiPhoneNumber
                    name="phone"
                    className="contactInfoInput"
                    data-cy="user-phone"
                    defaultCountry={"et"}
                    value={phone}
                    required
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>

              <div className="col-md-12 col-lg-6 ">
                <button type="submit" className="btnbtn userformbutton">
                  Reserve Inquery
                </button>
              </div>
            </div>
          </StylesProvider>
        </ThemeProvider>
      </form>
    </div>
  );
};
