"use client";
import { createContext, useContext } from "react";
import { useReducer } from "react";

export const GlobalContext = createContext();

export const ACTION_TYPE = {
  SET_COFFE_STORE: "SET_COFFE_STORE",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_COFFE_STORE: {
      return {
        ...state,
        data: action.payload.data,
      };
    }
    default:
      throw new Error("unhandl type action");
  }
};

export default function ContextState({ children }) {
  const initState = {
    data: [],
  };
  const [state, dispatch] = useReducer(storeReducer, initState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
