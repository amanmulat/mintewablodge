import React, { useLayoutEffect } from "react";
import "./usermodal.scss";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { StylesProvider } from "@material-ui/core/styles";
import { Backdrop } from "../backdrop";

function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
}

export const Modalerror = (props) => {
  useLockBodyScroll();
  return (
    <React.Fragment>
      <Backdrop click={props.onClose} />
      <div className=" user_modal_container user_modal_container_error">
        <header className="modal_header">
          <StylesProvider injectFirst>
            <h1>
              Error <ErrorOutlineIcon className="successicon" />
            </h1>
          </StylesProvider>
        </header>
        <section>
          <p>
            Your booking resquest has not been sent. Please try again later.
          </p>
        </section>
        <section>
          <button className="Stroke_button" onClick={props.onClose}>
            Close
          </button>
        </section>
      </div>
    </React.Fragment>
  );
};
