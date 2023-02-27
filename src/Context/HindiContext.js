import { createContext, useReducer } from "react";
import HindiReducer from "./HindiReducer";
const HindiContext = createContext();
export const HindiProvider = ({ children }) => {
    const initialState = {
      hindiData: null
    };
    const [state, dispatch] = useReducer(HindiReducer, initialState);
return (
  <HindiContext.Provider
    value={{
      ...state,
      dispatch,
    }}
  >
    {children}
  </HindiContext.Provider>
);
};
export default HindiContext;
