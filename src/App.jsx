import { Suspense, lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { AccountProvider } from "./contexts/AccountContext";
import Loader from "./components/Loader";

// import Main from "./components/Main";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";
// import PageNotFound from "./components/PageNotFound";

const Main = lazy(() => import("./components/Main"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
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
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
