import React , {  useLayoutEffect } from 'react'
import './bigspinner.css'

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

export const Spinner = () =>{
    useLockBodyScroll();
    return (
    <div className="bigspinner">
        <div className="topininmiddle">
            <div className="spinner">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>       
        </div>
    
    </div>
    
    
    )
}
