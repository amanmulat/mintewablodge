import React  , {useContext}from 'react'
import '../scss/room-card.css'
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
                       <span><p>price: ${props.price} </p></span>
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
        // <div className="roomcard"> 
        //     <div className='room-img '>
        //         <img src={props.imgsrc} alt={props.imgalt} />
        //     </div>
        //     <div className='room-info'>
        //             <div className="desc-top">
        //                 <h3>{props.title}</h3> 
        //                 <p>{props.description} </p>
        //             </div>
        //             <div className="action-bottom">
        //                 <span><p>${props.price} - {props.roomid} </p></span>
        //                 <Link className="btnbtn" to={{pathname : "/rooms/reserve"}} onClick={context.roomSelect(props.title , props.roomid)}>
        //                     Book Room
        //                 </Link>
        //             </div>
        //     </div>
        // </div>
    )
} 