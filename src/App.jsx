import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/index.jsx";
import Login from "./pages/Login/index.jsx";
import Layout from "./common/Layout.jsx";
import Feed from "./pages/Feed/index.jsx";
import Profile from "./pages/Profile/index.jsx";
import Friends from "./pages/Friends/index.jsx";
import Requests from "./pages/Requests/index.jsx";
import Messages from "./pages/Messages/index.jsx";
import UserProfile from "./pages/UserProfile/index.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="profile" element={<Profile />} />
          <Route path="friends" element={<Friends />} />
          <Route path="requests" element={<Requests />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile/user/:id" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
