import React from 'react'
import styled from 'styled-components';
import RoomItem from './RoomItem/roomitems'
const UL = styled.ul`

    margin: 2rem auto ; 
    width : 40rem ; 
   
    max-width : 90%;
    list-style : none ; 
    padding : 0;
    

`

const roomList = props =>{
    const rooms = props.rooms.map(room =>{
            return(
                <RoomItem 
                roomId = {room._id} 
                title ={room.title} 
                price={room.price}
                roomType = {room.roomType}
                key={room._id} 
                adminId ={props.authAdminid}
                creatorId ={room.creator._id}
                onDetails = {props.onViewDetails}
                />
            )
    })
    return(
        <UL>
            {rooms}
        </UL>
    )
}

export default roomList;