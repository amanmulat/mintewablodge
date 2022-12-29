import React from "react";

export default React.createContext({
  token: null,
  dateVisiting: (checkin, checkout) => {},
  checkin: null,
  checkout: null,
  guests: null,
  updateGuests: (guests) => {},
  roomSelect: (roomSelected, roomPrice) => {},
  roomSelected: null,
  roomPrice: null,
  login: (token, adminId, tokenExpiration) => {},
  logout: () => {},
  adminId: null,
  navigationScrollThingi: (inView) => {},
  roomFetch: (roomFetched) => {},
  roomFetched: null,
  booked: (isbooked) => {},
  ifbooked: null,
  errorBooked: (isbooked) => {},
  ifbookedError: null,
});
