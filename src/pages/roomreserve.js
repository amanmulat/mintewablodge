import React, {  useContext } from 'react';
// import Carousel from 'react-bootstrap/Carousel'
// import Bedroom from '../assets/card/service/bedroom.jpg'
// import Sunset from '../assets/card/service/sunset.jpg'
// import People from '../assets/card/service/people.jpg'
import {UserInfo} from '../components/userinfo'
import {CartCard} from '../components/cartcard'
import AuthContext from '../context/auth-context'

function Userinfos
 (props) {
  //used for the navigation 
  var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const context = useContext(AuthContext)
  context.navigationScrollThingi(true) 
  let checkin=""
  let checkout=""
  let checkinSet=""
  let checkoutSet=""
  console.log(context.checkin + "was up")
if((context.checkin && context.checkout )!==null){
  checkin = context.checkin.toLocaleDateString("en-US", options)
  checkinSet = context.checkin
}
if( context.checkout !==null){
  console.log(context.checkout + " mozart")
   checkout = context.checkout.toLocaleDateString("en-US", options)
   checkoutSet = context.checkout
}

return (
<div className="container room-container">
  <div className="row">
  
    <div  className='col-md-8 '>
      <UserInfo  
      checkin={checkinSet} 
      checkout={checkoutSet}
      roomSelected = {context.roomSelected}
    /> 
    </div>

    <div  className='col-md-4 '>
    <CartCard className=" displayCart" 
    roomselected={context.roomSelected}
    checkin={checkin} 
    checkout={checkout}
   />
    </div>
    
  </div>
</div>
)}
export default Userinfos

