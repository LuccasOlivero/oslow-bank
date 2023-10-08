import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Main />} />
            <Route path="/App" element={<AppLayout />} />
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
