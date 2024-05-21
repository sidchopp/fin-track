import { createContext, useReducer, useEffect } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    authReducer,
    // Global States object (Initial values)
    {
      user: null,
      authIsReady: false,
    }
  );

  console.log("state", state);

  // sets up a listener for authentication state changes and
  // dispatches an action when the state, which is user here, changes
  useEffect(() => {
    const unSubscribe = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });

      // Firing the auth state changed function only one time - initially when App renders for 1st time
      unSubscribe();
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
