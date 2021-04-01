import React, {  useLayoutEffect } from 'react'
import './usermodal.scss'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { StylesProvider } from "@material-ui/core/styles";
import {Backdrop} from '../backdrop'

function useLockBodyScroll() {
    useLayoutEffect(() => {
     // Get original body overflow
     const originalStyle = window.getComputedStyle(document.body).overflow;  
     // Prevent scrolling on mount
     document.body.style.overflow = 'hidden';
     // Re-enable scrolling when component unmounts
     return () => document.body.style.overflow = originalStyle;
     }, []); // Empty array ensures effect is only run on mount and unmount
  }
   
export const Modal = props =>{
 useLockBodyScroll();
    return (
        <React.Fragment>

        
        <Backdrop
        click={props.onClose}
        />
   <div className="user_modal_container">
      <header className="modal_header">
      <StylesProvider injectFirst>
          <h1>
                Success <CheckCircleOutlineIcon className="successicon"/>
          </h1>
         </StylesProvider>
      </header>
      <section>
          <p>
            Your booking resquest has been sent with a conformation email. We will contact you with the rest of the details
          </p>
          <p>
              thank you for Staying with us.
          </p>
      </section>
      <section>
          <button className="Stroke_button" onClick={props.onClose}>
              Close
          </button>
      </section>
    </div>
  </React.Fragment>
    )
}
