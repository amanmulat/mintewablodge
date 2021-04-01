import React , {useContext}from 'react'
import '../scss/cartcard.scss'
import AuthContext from '../context/auth-context'
export const CartCard =props=>{
    const context = useContext(AuthContext)
    return(
        <div className="cartcart-bigger">
        <div className="cartcard">
            <span className="your-stay">Your Stay</span>
            <div className="hotel-cart-container">
                <div  className="checkin">
                    Check-in
                    <span className="time-and-date"> After 2:00PM</span>
                    <span className="time-and-date">{props.checkin}</span>
                </div>
                <div className="checkout">
                   Check-out

                    {/* <span > </span>  */}
                    <span className="time-and-date">Before 12:00PM</span>
                    <span className="time-and-date">{props.checkout}</span>
                </div> 
                <div className="action-cartcard">
                    <span>{props.roomselected}</span>
                    {context.roomPrice &&  <span className="totlacartcard">Total: ${context.roomPrice}</span> }
                    
                </div>
            </div>
            
                
            
           
            
                
        </div>
        </div>
    )
}