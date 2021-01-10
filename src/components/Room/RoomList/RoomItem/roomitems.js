import React from 'react'
import styled from 'styled-components';
const LI = styled.li`

    margin : 1rem 0;
    padding : 1rem ;
    border : 1px solid sandybrown ;
    display : flex; 
    align-items: center;
   
    justify-content : space-between;
    h1{
        margin : 0;
        font-size : 1.8rem;
        color : sandybrown;
        text-transform : uppercase;
    }
    h2{
        margin : 0;
        font-size : 1rem; 
        color : rgb(105, 75, 49);
        text-align : start;
    }
    p{
        margin : 0;
    }
    button {
        padding : 0.5rem;
    }
    

`


const roomItem = props =>{
    return(
        <LI  key={props.key}>
           <div>
               <h1>{props.title}</h1> 
               <h2>{props.roomType} - birr{props.price}</h2> 
           </div>
           <div>
              {props.adminId === props.creatorId &&
              ( <p>your the owner of the room created</p>) }
               <button className="btnbtn" onClick={props.onDetails.bind(this, props.roomId)}>View Details</button>
               
           </div>
        </LI>
    )
}
export default roomItem;