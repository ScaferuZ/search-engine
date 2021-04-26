import React, { createContext, useContext, useReducer } from "react";

// preparing the data layer
export const StateContext = createContext();

// high order component. initialState= bagaimana tampilan data layer saat App is loaded
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* children = App */}
    {children}
  </StateContext.Provider>
);

// Hook, which is allow us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
