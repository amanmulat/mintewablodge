import React , {useContext}from 'react'
import '../scss/cartcard.css'
import AuthContext from '../context/auth-context'
export const CartCard =props=>{
    const context = useContext(AuthContext)
    return(
        <div className="cartcard">
            <span className="your-stay">Your Stay</span>
            <div className="hotel-cart-container">
                <div  className="chekin">
                    <b>Check-in</b><span> After 2:00PM</span>
                </div>
                <div className="checkout">
                    <b>Check-out</b>
                    <span > Before 12:00PM</span>
                </div>    
            </div>
            
                
            
            <div className="datecartcard">
            <p>{props.checkin}</p> <p>{props.checkout}</p>
            
            </div>
            <div className="action-cartcard">
               
               
                {context.roomPrice &&  <span className="totlacartcard">Total: ${context.roomPrice}</span> }
                <p>{props.roomselected}</p>
            </div>
                
        </div>
    )
}