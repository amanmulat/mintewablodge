import React from 'react'
import { useEffect , useState  , useContext} from 'react';
import AuthContext from '../context/auth-context';
import Spinner from '../components/Spinner/spinner'
import BookingList from '../components/Bookings/BookingList/BookingList'

const BookingPage =()=>{
    const context = useContext(AuthContext)
    const theToken = context.token
    useEffect(()=>{
       let isActive = true 
        fetchBookings(theToken , isActive)
        fetchRooms();
       
    },[theToken ])

    const [isLoading, setIsLoading] = useState(false)
    const [bookings, setBookings] = useState([])
    const [rooms, setRooms] = useState(null)
    context.roomFetch(rooms);
    const verifyBookingHandler = (bookingId , gotapproval , roomid ) =>{
     
        const approval = !gotapproval
        if(roomid === "5ff48f4a1709182534e04036" ){
            return
        }  
         setIsLoading(true);
        let requestBody ={
              query : `
                  mutation{
                        updateBookings(bookingId : "${bookingId}" ,  approved :${approval} , room : "${roomid}"){
                        approved
                        room{
                            _id
                        }
                    }
                }
              `
          };
  
        if(approval === false){
            requestBody ={
                query : `
                    mutation{
                          updateBookings(bookingId : "${bookingId}" ,  approved :${approval} , room : "5ff48f4a1709182534e04036" ){
                          approved
                          room{
                              _id
                          }
                      }
                  }
                `
            };
        }
        
          
  
          fetch('https://aqueous-reaches-77121.herokuapp.com/',{
                  method : 'POST',
                  body : JSON.stringify(requestBody) , 
                  // for gql to work we need to tell it in which format we sending so header
                  headers :{
                      'Content-Type' : 'application/json',
                      'Authorization' : 'Bearer ' + theToken 
                 
                  }
      
              }).then(res => {
                  if(res.status !== 200 && res.status !== 201){
                      throw new Error('Failed');
                  }
                  return res.json();
              }).then(resData =>{
                 
                  let isActive = true 
                fetchBookings(theToken , isActive)
              })
              .catch(err=>{
             
                  setIsLoading(false)
              })
    }
    const deleteBookingHandler = bookingId =>{
        setIsLoading(true);
          const requestBody ={
              query : `
                  mutation {
                    cancelBooking(bookingId : "${bookingId}") {
                        _id
                        title 
                      }
                  }
              `
          };
  
  
          fetch('https://aqueous-reaches-77121.herokuapp.com/',{
                  method : 'POST',
                  body : JSON.stringify(requestBody) , 
                  // for gql to work we need to tell it in which format we sending so header
                  headers :{
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Bearer ' + theToken  
                 
                  }
      
              }).then(res => {
                  if(res.status !== 200 && res.status !== 201){
                      throw new Error('Failed');
                  }
                  return res.json();
              }).then(resData =>{
              
               setBookings(prevBookings =>{
                const updatedBookings = prevBookings.filter(booking =>{
                 return bookingId !== booking._id
                })
                setIsLoading(false)
                return updatedBookings 
            })
              })
              .catch(err=>{
            
                
                  setIsLoading(false)
              })
    }
    const fetchBookings=(token ,isActive)=>{
        setIsLoading(true);
          const requestBody ={
              query : `
                  query {
                      bookings {
                        _id
                      
                        custmer{
                            prefix
                            firstName 
                            lastName 
                            phone
                            email
                        }
                        checkinDate 
                        checkoutDate
                        createdAt
                        approved
                       room{
                           title
                           _id
                       }
                      }
                  }
              `
          };
  
  
          fetch('https://aqueous-reaches-77121.herokuapp.com/',{
                  method : 'POST',
                  body : JSON.stringify(requestBody) , 
                  // for gql to work we need to tell it in which format we sending so header
                  headers :{
                      'Content-Type' : 'application/json',
                      'Authorization' : 'Bearer ' + token 
                  }
              }).then(res => {
                  if(res.status !== 200 && res.status !== 201){
                      throw new Error('Failed');
                  }
                  return res.json();
              }).then(resData =>{
   
                  
                const bookingss = resData.data.bookings
                if(isActive){
                   
                    
                     setBookings(bookingss)
                }
                setIsLoading(false)
              
              })
              .catch(err=>{
       
                  setIsLoading(false)
              })
         
    }
    const fetchRooms=()=>{
        setIsLoading(true);
      const requestBody ={
          query : `
              query {
                  rooms {
                      _id
                      title
                      description 
                      price 
                      roomType 
                      date 
                      creator {
                          _id
                          email
                      }
                  }
              }
          `
      };


      fetch('https://aqueous-reaches-77121.herokuapp.com/',{
              method : 'POST',
              body : JSON.stringify(requestBody) , 
              // for gql to work we need to tell it in which format we sending so header
              headers :{
                  'Content-Type' : 'application/json'
             
              }
  
          }).then(res => {
              if(res.status !== 200 && res.status !== 201){
                  throw new Error('Failed');
              }
              return res.json();
          }).then(resData =>{
            const rooms = resData.data.rooms
            // context.roomFetch(rooms)
             setRooms(rooms);
             setIsLoading(false)
          })
          .catch(err=>{
     
            //   setIsLoading(false)
          })
    }
    
   
return (
        <div className="parentdiv">
            {isLoading 
                ?
            <Spinner/>
                :
            ( bookings.length !==0 
                ? 
            <BookingList 
            bookings={bookings} 
            DeleteBooking={deleteBookingHandler} 
            verifyBookingHandler={verifyBookingHandler}
            />
                : 
            <h2>No Bookings bro :(</h2>)
            }
        </div>
    );
}

export default BookingPage;