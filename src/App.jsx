import Bookmark from "@/pages/Bookmark/index.jsx";
import Feed from "@/pages/Feed/Feed.jsx";
import Friends from "@/pages/Friends/Friends.jsx";
import Login from "@/pages/Login/Login.jsx";
import Messages from "@/pages/Messages/Messages.jsx";
import Profile from "@/pages/Profile/Profile.jsx";
import Register from "@/pages/Register/Register.jsx";
import Requests from "@/pages/Requests/Requests.jsx";
import UserProfile from "@/pages/UserProfile/UserProfile.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./common/Layout.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="friends" element={<Friends />} />
          <Route path="messages" element={<Messages />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="requests" element={<Requests />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/user/:id" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
