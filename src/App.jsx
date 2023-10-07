import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bank from "./pages/Bank";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route path="/bank" element={<Bank />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
