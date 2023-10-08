import { useContext, createContext, useReducer } from "react";
const FAKE_USER = {
  name: "admin",
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
    initialState,
    reducer
  );

  function login(email, password) {
    // console.log(email, pas);
    if (email === FAKE_USER.password && password === FAKE_USER.password)
      disppath({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    disppath({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
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
