import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route path="/App" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
