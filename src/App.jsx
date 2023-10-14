import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { AccountProvider } from "./contexts/AccountContext";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Main />} />
            <Route
              path="/App"
              element={
                <ProtectedRoute>
                  <AccountProvider>
                    <AppLayout />
                  </AccountProvider>
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
