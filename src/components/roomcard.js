import React  , {useContext}from 'react'
import '../scss/room-card.scss'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth-context'

export const RoomCard = props =>{
    const context = useContext(AuthContext)
    return(
        <div className="row roomcard">
            <div className="col-lg-6  room-img">
                <div className="imageContainer">
                     <img src={props.imgsrc} alt={props.imgalt} />
                </div>
                

            </div>
            <div className="col-lg-6   rightsideinfo ">
                
                <div className="desc-top">
                       <h3>{props.title}</h3> 
                       <p>{props.description} </p>
                </div>
                <div className="action-bottom">
                       <span><p>Price: ${props.price} </p></span>
                       <Link 
                       className="btnbtn" 
                       to={{pathname : "/rooms/reserve"}} 
                       onClick={
                           ()=>{context.roomSelect(props.title , props.price )}}>
                           Book Room
                       </Link>
                </div>
               
                
            </div>
        </div>
  
    )
} 