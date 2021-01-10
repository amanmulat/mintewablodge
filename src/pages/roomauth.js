import React, { createRef, useState, useContext } from 'react'
import styled from 'styled-components';
import Modal from '../components/modal/modal'
import {Backdrop} from '../components/backdrop'
import AuthContext from '../context/auth-context';
import RoomList from '../components/Room/RoomList/roomlist'
import Spinner from '../components/Spinner/spinner'
import { useEffect } from 'react';
const titleElement = createRef()
const priceElement = createRef()
const dateElement = createRef()
const descriptionElement = createRef()
const roomtypeElement = createRef()




const DIV = styled.div`
 min-height : 90vh;
.createRoomBox{
    margin : 4rem auto;
    width : 40% ; 
    max-width : 80%;
    align-items : center;
    text-align : center;
    button{
        display : block;
        background-image : none ; 
        color : black;
        margin :2px auto;
        background : transparent ;
        width : 100%;
        border : 1px solid sandybrown;
    }
}

.rooms_list{
    margin: 2rem auto ; 
    width : 40rem ; 
    max-width : 90%;
    list-style : none ; 
    padding : 0;
}
.room_item{
    margin : 1rem 0;
    padding : 1rem ;
    border : 1px solid sandybrown ;
}

`

const FORM = styled.form`
    width : 40rem ;
    max-width : 80%;
    margin : 1rem auto;
    .checkingforErrors{
        width : 100%;
        color : sandybrown ;
        background-color : red
    }
    .room-auth-input input,
    .room-auth-input textarea {
        width : 100%;
        display : block;
        background-color : none;
        margin-bottom: 1rem;
        border-top: none ; 
        border-right: none ; 
        border-left: none ; 
    }

`
const RoomAuth=()=>{
        // useEffect(() => {
        //     fetchRooms()
        // }, [])
        const [checkingForErrors, setcheckingForErrors] = useState(false)
        const [selector, setselector] = useState(null)
        const emailElement = React.createRef()
        const passwordElement =React.createRef()
        const [isLoading, setIsLoading] = useState(false) 
        const context = useContext(AuthContext)
        const [rooms, setRooms] = useState(context.roomFetched)
       
        const [creating, setCreating] = useState(false)
        const [selectedRoom, setSelectedRoom] = useState(null)
        const [creatingAdmin, setCreatingAdmin] = useState(false)
        const [incorrect, setIncorrect] = useState(false)
        const detailsModalOpener = roomId =>{
            const selectedRoom = rooms.find( e=> e._id === roomId)
            setSelectedRoom(selectedRoom)
        }
        const modalCancelHandler = ()=>{
            setCreating(false)
            setCreatingAdmin(false)
            setSelectedRoom(null)
            setcheckingForErrors(false)
        }
        const bookRoomHandler =()=>{
            if(!context.token){
                setSelectedRoom(null)
                return
            }
            const requestBody ={
                query : `
                    mutation {
                        bookRoom(roomId  : "${selectedRoom._id}") {
                            _id
                            createdAt
                            updatedAt
                        }
                    }
                `
            };
    
    
            fetch('http://localhost:8000/graphql',{
                    method : 'POST',
                    body : JSON.stringify(requestBody) , 
                    // for gql to work we need to tell it in which format we sending so header
                    headers :{
                        'Content-Type' : 'application/json',
                        'Authorization' : 'Bearer ' + context.token 
                   
                    }
        
                }).then(res => {
                    if(res.status !== 200 && res.status !== 201){
                        throw new Error('Failed');
                    }
                    return res.json();
                }).then(resData =>{
                console.log(resData)
                setSelectedRoom(null)
                })
                .catch(err=>{
                    console.log(err)
                   
                })
        }

        const modalCreateRoomConfirmHandler =()=>{

            
            const title = titleElement.current.value;
            const roomType = selector;
            const price = +priceElement.current.value;
            const date = dateElement.current.value;
            const description = descriptionElement.current.value;

            if(title.trim().length===0 ||
                price<=0|| 
                date.trim().length===0 || 
                description.trim().length===0 ||
                selector.trim().length===0
                ){
                    
                    setcheckingForErrors(true)
                    return
                }
                setcheckingForErrors(false)
                
              const requestBody ={
                        query : `
                            mutation {
                                createRoom(roomInput : {
                                    title : "${title}" , 
                                    description : "${description}" , 
                                    price : ${price} , 
                                    roomType : "${roomType}" , 
                                    date : "${date}" }){
                                    _id
                                    title 
                                    roomType
                                    price
                                    date
                                    description
                                }
                            }
                        `
                    };
            

            //to send requeset to backend with token added
            const token = context.token;
        
            fetch('http://localhost:8000/graphql',{
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
                setCreating(false)
               setRooms(prevroom =>{
                const whow = [...prevroom]
                whow.push({
                    _id : resData.data.createRoom._id,
                   title :resData.data.createRoom.title , 
                   description : resData.data.createRoom.description, 
                   price : resData.data.createRoom.price,
                   roomType :resData.data.createRoom.roomType,
                   date : resData.data.createRoom.date,
                   creator : {
                       _id : context.adminId, 
                   }
                })
               return whow
               })
              
            })
            .catch(err=>{

                console.log(err)
            })
    
        }
        
    //   const fetchRooms=()=>{
    //       setIsLoading(true);
    //     const requestBody ={
    //         query : `
    //             query {
    //                 rooms {
    //                     _id
    //                     title
    //                     description 
    //                     price 
    //                     roomType 
    //                     date 
    //                     creator {
    //                         _id
    //                         email
    //                     }
    //                 }
    //             }
    //         `
    //     };


    //     fetch('http://localhost:8000/graphql',{
    //             method : 'POST',
    //             body : JSON.stringify(requestBody) , 
    //             // for gql to work we need to tell it in which format we sending so header
    //             headers :{
    //                 'Content-Type' : 'application/json'
               
    //             }
    
    //         }).then(res => {
    //             if(res.status !== 200 && res.status !== 201){
    //                 throw new Error('Failed');
    //             }
    //             return res.json();
    //         }).then(resData =>{
    //           const rooms = resData.data.rooms
    //            setRooms(rooms);
    //            setIsLoading(false)
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //             setIsLoading(false)
    //         })
    //    }
       const modalCreateAdmin = (event)=>{
        setIncorrect(false)
        
        event.preventDefault();
        const email =emailElement.current.value ;
        const password = passwordElement.current.value
            if(email.trim().length===0 ||
             password.trim().length===0 
            ){  
                setcheckingForErrors(true)
               
                return
            }
            setIsLoading(true)
                setcheckingForErrors(false)
           
           const requestBody ={
                    query : `
                        mutation {
                            createAdmin(adminInput : {email : "${email}" , password : "${password}"}){
                                _id 
                                email 
                            }
                        }
                    `
                };
        

      
       
        //to send requeset to backend
        fetch('http://localhost:8000/graphql',{
            method : 'POST',
            body : JSON.stringify(requestBody) , 
            // for gql to work we need to tell it in which format we sending so header
            headers :{
                'Content-Type' : 'application/json'
            }

        }).then(res => {
            if(res.status !== 200 && res.status !== 201){
                throw new Error('Connection issue')
            }
           
            return res.json();
        }).then(resData =>{
            //if we are loged in or success in creating user
            console.log(resData)
            setCreatingAdmin(false)
            setIsLoading(false)
        })
        .catch(err=>{ 
            setIncorrect(true)
            console.log(err)
            setIsLoading(false)

        })
       }
       const handleOnchangeSelector = (event)=>{
           setselector(event.target.value)
       }
        return (
         <DIV>
            {(creating||selectedRoom||creatingAdmin) && <Backdrop/>}

            <div className="createRoomBox">
                
                    <button className="btnbtn" onClick={()=>{setCreating(true)}}>
                        Create Room 
                    </button>
               
                    <button className="btnbtn" onClick={()=>{setCreatingAdmin(true)}}>
                        Create Admin 
                    </button>
                
                
            </div> 

            {isLoading 
                ?
            ( <Spinner />)
                 :
            <RoomList rooms={rooms} 
            authAdminid={context.adminId}
            onViewDetails ={detailsModalOpener}
            
            /> }

            {selectedRoom && (
            <Modal
            title= {selectedRoom.title} 
            canCancel 
            canConfirm 
            confirmText ="Book"
            onCancel={modalCancelHandler}
            onConfirm={bookRoomHandler}
                >
                <h1>{selectedRoom.title}</h1> 
               <h2>{selectedRoom.roomType} - birr{selectedRoom.price}</h2> 
                <p>{selectedRoom.description}</p>
            </Modal>) }

            { creating && 
            <Modal title="Create Room" 
            haveError ={checkingForErrors}
            canCancel 
            canConfirm 
            confirmText= "Confirm"
            onCancel={modalCancelHandler}
            onConfirm={modalCreateRoomConfirmHandler}
                >
                <FORM >
                    
                    
                    <div  className="room-auth-input">
                        <input type="text" placeholder="Title" id="title" ref={titleElement}/>
                    </div>
                    {/* <div  className="room-auth-input">
                        <input type="text" placeholder="Room Type" id="roomtype" ref={roomtypeElement}/>
                    </div> */}
                    <div className="room-auth-input">
                        <select required value={selector}  onChange={handleOnchangeSelector}>
                                <option value=""></option>
                                <option value="Single Bedroom">Single Bedroom</option>
                                <option value="Double Bedroom">Double Bedroom</option>
                                <option value="Twin Bedroom">Twin Bedroom</option>
                        </select> 
                    </div>
                    <div>
                        {selector}
                    </div>
                    <div className="room-auth-input">
                        <input type="number" placeholder="Price" id="price" ref={priceElement}/>
                    </div>
                    <div className="room-auth-input">
                        <input type="datetime-local" placeholder="Date" id="date" ref={dateElement} />
                    </div>
                    <div className="room-auth-input">
                        <textarea id='description' rows="4" placeholder="Description" ref={descriptionElement}></textarea>
                    </div>
                </FORM>
            </Modal>}

            { creatingAdmin && 
            <Modal title="Create Admin" 
            haveError ={checkingForErrors}
            confirmText= "Confirm"
            onConfirm={modalCreateAdmin}
                >
                <form className="auth-form" onSubmit={modalCreateAdmin}>
                    <div  className="auth-input">
                        <input type="email" placeholder="Email" id="email" ref={emailElement}/>
                    </div>
                    <div className="auth-input">
                        <input type="password" placeholder="Password" id="password" ref={passwordElement}/>
                    </div>

                    <div className="auth-action">
                        <button type="submit" >Create User</button>
                    <button type="button" onClick={modalCancelHandler} >Cancel</button>

                    </div>
                    {incorrect && <h2>Someting isn't right, bro</h2>}
             </form>
            </Modal>}
         </DIV>
        );
        
    }

export default RoomAuth;