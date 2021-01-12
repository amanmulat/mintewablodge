import React from 'react'

import './modal.scss'
const modal = props =>{
    return (
   <div className="modal_container">
        <header>
            <h1>{props.title}</h1>
        </header>
        {props.haveError && <div className="errors"><h2>Fill Everything</h2></div>}
        <section className="modal_content">
          {  props.children}
          {/* what ever is in the <Modal></Modal> */}
        </section>
        <section className="modal_action">
            {props.canCancelBooking && <button className="btnbtn" onClick={props.onCancelBooking}>Delete</button>}
            {/* {props.canActivateBooking && <button className="btnbtn" onClick={props.onActivateBooking}>Activate</button>} */}
            {props.canCancel && <button className="btnbtn" onClick={props.onCancel}>Cancel</button>}
    {props.canConfirm && <button className="btnbtn" onClick={props.onConfirm}>{props.confirmText}</button>}
        </section>
    </div>
    )
}
export default modal;