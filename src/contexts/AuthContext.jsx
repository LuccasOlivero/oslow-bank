import { useContext, createContext, useReducer, useState } from "react";
import Error from "../components/Error";

const FAKE_USER = {
  name: "Lucas",
  email: "admin@admin.com",
  password: "admin",
};

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, disppath] = useReducer(
    reducer,
    initialState
  );
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("admin");

  function login(email, password) {
    if (email !== FAKE_USER.email || password !== FAKE_USER.password) {
      setError(true);
    }

    if (email === FAKE_USER.email && password === FAKE_USER.password)
      disppath({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    disppath({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        error,
        setError,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider ");
  return context;
}

export { AuthProvider, useAuth };
