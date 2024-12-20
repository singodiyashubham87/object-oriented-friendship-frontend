import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/index.jsx";
import Login from "./pages/Login/index.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
