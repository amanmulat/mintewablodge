import React, { useState , useContext} from 'react'
import Modal from '../../modal/modal'
import {Backdrop} from '../../backdrop'
import './bookinglist.css'
import AuthContext from '../../../context/auth-context';



const BookingList =props=>{

    const [selectValue, setselectValue] = useState(null)
    
    const context = useContext(AuthContext)
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    let appBooking = "bookings_item_li"
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedBooking, setselectedBooking] = useState(null)

    const onViewDetails = bookingId =>{
       const theRoom = props.bookings.find(e => e._id === bookingId)
        setselectedBooking(theRoom) 
        setModalOpen(!modalOpen)
       
    }
    const onButtonCancel = ()=>{
        setModalOpen(false)
        setselectedBooking(null)
        setselectValue(null)
    }
    const handleSelectChange =(event)=>{
        setselectValue(event.target.value)
    }
    const onsubmitHandler = (event)=>{
        event.preventDefault();
        props.verifyBookingHandler( 
            selectedBooking._id , 
            selectedBooking.approved , 
            selectValue 
        )
    }
    return(
        <React.Fragment>
            {modalOpen && <Backdrop click={()=>{setModalOpen(!modalOpen)}}/>}
          {modalOpen&& 
                    <Modal
                        className="modalmodal"
                        title = {selectedBooking.room.title}
                        canCancel 
                        canCancelBooking
                        
                        onActivateBooking  = {props.verifyBookingHandler.bind(this , selectedBooking._id , selectedBooking.approved , selectValue )}
                        onCancelBooking ={props.DeleteBooking.bind(this , selectedBooking._id)}
                        onCancel = {onButtonCancel}
                    >
                    <div className="modal_booking_content">
                        <h2>{selectedBooking.custmer.firstName} {selectedBooking.custmer.lastName}</h2>
                        <p>Phone: {selectedBooking.custmer.phone}</p>
                        <p>Email: {selectedBooking.custmer.email}</p>
                        <p>Checkin: {new Date(selectedBooking.checkinDate).toLocaleDateString("en-US", options) }</p>
                        <p>Checkout: {new Date(selectedBooking.checkinDate).toLocaleDateString("en-US", options) }</p>
                        <p>Booking Confirmed: {selectedBooking.approved ? "Confirmed" : "Unconfirmed" }</p>
                        <p>{selectValue}</p>
                        {!selectedBooking.approved &&
                        <form 
                        onSubmit={onsubmitHandler}>
                           <select required  value={selectValue} onChange={handleSelectChange}>
                            <option value=""></option>
                            {context.roomFetched.map(roomvalue =>{
                                if(selectedBooking.room.title === roomvalue.title){
                                    return
                                }
                                return(
                                    <option value={roomvalue._id}>{roomvalue.title}</option>
                                )
                            })}
                            </select> 
                            <button className="btnbtn" type="submit" >
                                Activate
                            </button>
                        </form>
                        }
                        {
                        selectedBooking.approved &&
                        <button className="btnbtn" type="submit" onClick={props.verifyBookingHandler.bind(this , selectedBooking._id , selectedBooking.approved , selectValue )} >
                            Deactivate
                        </button>
                        }
                        
                        
                    </div>
                        

                    </Modal>}
        <ul className="ul">
            <div className="row">
               
           {props.bookings.map(booking =>{
               
               if(new Date(booking.checkinDate)> new Date()){
                appBooking="bookings_item_li bookings_item_li_active"
               }
              if(booking.approved){ 
                  appBooking="bookings_item_li bookings_item_li_active"
              }else{
                  appBooking="bookings_item_li"
              }
            return(
                
            <div className="col-md-6 col-sm-12 col-lg-4 grid_booking" >
                <li key={booking._id}  className={appBooking}>
                    <div  className="bookings_item-data-info">
                        {/* <h2 className="room_type">{booking.room._id} </h2>  */}
                        <p> 
                            Check In : {new Date(booking.checkinDate).toLocaleDateString("en-US", options) }  
                        </p>
                        <p>
                            Check Out : {new Date(booking.checkoutDate).toLocaleDateString("en-US", options)} 
                        </p>
                        <p>
                            <p>{booking.custmer.prefix} {booking.custmer.firstName} {booking.custmer.lastName}</p>
                            
                        </p>
                    </div>
                    <div className="bookings_item-action">
                        
                        <button className="btnbtn" onClick={()=>{onViewDetails(booking._id)}}>
                            View Details
                        </button>
                            {/* <button className="btnbtn" onClick={props.DeleteBooking.bind(this , booking._id)}>
                                Cancel Booking
                            </button>
                            <button className="btnbtn" 
                                onClick={props.verifyBookingHandler.bind(this , booking._id , booking.approved)}>
                                {booking.approved ? "Deactivate" : "Activate" }
                            </button> */}
                    </div>
                </li>
            </div>
                )
            })} 
            
            </div>
        </ul>
        </React.Fragment>
    )
}

export default BookingList