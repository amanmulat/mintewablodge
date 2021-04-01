import React , {  Fragment }from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom';
import Rooms from './pages/rooms';
import UserInfo from './pages/roomreserve'
import Landing from './pages/Landing'
import Navbar from './components/nav/navbar'
import { useState } from 'react';
import {Footer} from './components/footer';
import Auth from './pages/auth'
import BookingPage from './pages/booking'
import RoomAuth from './pages/roomauth'
import AuthContext from './context/auth-context';



export const App = () => {

    // make this use the context thingi
    const [here, sethere] = useState(true)
    const [room , setRoom]= useState([])
    const navigationScrollThingi = (inview) =>{
      sethere(inview)
    }
const [roomSelectedState, setRoomSelectedState] = useState(null)
const [roomPrice, setroomPrice] = useState(null)
const [token, setToken] = useState(null)
const [ifbooked, setifbooked] = useState(false)
const [adminId, setAdminId] = useState(null)
const [checkin , setCheckin] = useState(null);
const [checkout , setCheckout] = useState(null);
const login=(token , adminId , tokenExpiration )=>{
  setToken(token);
  setAdminId(adminId)
}
const booked  = (isbooked)=>{
  setifbooked(isbooked)
}
const logout =()=>{
  setToken(null)
  setAdminId(null)
}
const dateVisiting =(checkin , checkout)=>{
  setCheckin(checkin)
  setCheckout(checkout)
}
const roomSelect = (roomSelected , roomPrice )=>{
  setRoomSelectedState(roomSelected)
  setroomPrice(roomPrice)
}
const roomFetch = (roomFetched)=>{
setRoom(roomFetched)
}


  return (
    <Router>
       <div className="all">
          <AuthContext.Provider value={
            {
              token : token ,
              ifbooked : ifbooked, 
              adminId : adminId ,
              checkin : checkin,
              checkout :checkout,
              roomSelected : roomSelectedState,
              roomPrice : roomPrice, 
              roomFetched : room,
              dateVisiting : dateVisiting,
              logout : logout, 
              login : login,
              booked : booked,
              navigationScrollThingi : navigationScrollThingi,
              roomSelect : roomSelect,
              roomFetch : roomFetch
            }}>
          <Navbar inView={here} />
          <main>
     
           <Fragment>
            <Switch>  

              {token && <Redirect from="/auth" to="/bookings" exact />}
              <Route path="/" exact component={Landing}/>
              <Route path='/rooms' exact component={Rooms}/>
               {!roomSelectedState && <Redirect from="/rooms/reserve" to="/rooms" exact />}
              <Route path='/rooms/reserve' exact component={UserInfo}/>
              {!token && <Route path='/auth' component={Auth}/>}
              {!token && <Redirect from="/bookings" to="/auth" exact />}
              {!token && <Redirect from="/roomauth" to="/auth" exact />}
             
              {token&&<Route path="/roomauth" component={RoomAuth}/>}
              <Route path="/bookings" component={BookingPage}/>
              {/* delete this after  up*/}
              {token && <Route path="/bookings" component={BookingPage}/>}
              
              {/* <Route path="/rooms" render{()=>()} getInView= {getInView} component={Rooms}/> */}
           
            </Switch>
          </Fragment>
          </main>
          <Footer/> 
          </AuthContext.Provider>
        </div>
    </Router>
    )
  }
      


export default App;
