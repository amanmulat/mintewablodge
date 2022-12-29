import React, { useContext } from "react";
import { RoomCards } from "../components/roomcards";
import { CartCard } from "../components/cartcard";
import AuthContext from "../context/auth-context";
import rooms from "../components/roomContent/content";
import { Modal } from "../components/modal/usermodal";
import { Modalerror } from "../components/modal/usermodalerror";
function Rooms(props) {
  //used for the navigation
  var options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const context = useContext(AuthContext);
  context.roomSelect(null, null);
  context.navigationScrollThingi(true);
  let checkin = "";
  let checkout = "";
  if (context.checkin !== null) {
    checkin = context.checkin.toLocaleDateString("en-US", options);
    checkout = context.checkout.toLocaleDateString("en-US", options);
  }

  //for callback
  const modalCloseHandler = () => {
    context.booked(false);
  };
  const modalErrorCloseHandler = () => {
    context.errorBooked(false);
  };

  return (
    <div className="container room-container">
      {context.ifbooked && <Modal onClose={modalCloseHandler} />}
      {context.ifbookedError && <Modalerror onClose={modalErrorCloseHandler} />}
      <div className="row">
        <div className="col-lg-8 col-md-7">
          <RoomCards rooms={rooms} />
        </div>
        <div className="col-lg-4 col-md-5">
          <CartCard roomselected={""} checkin={checkin} checkout={checkout} />
        </div>
      </div>
    </div>
  );
}
export default Rooms;
