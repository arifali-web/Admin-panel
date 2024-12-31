import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./app/Home";
import Profile from "./app/Profile";
import Billing from "./app/Billing";
import UserManagement from "./app/UserManagment";
import Settings from "./app/Setting";
import LayoutAdmin from "./component/partial/Layout";
import Login from "./app/Auth/login";
import Forgotpassword from "./app/Auth/forgot-password";
import Otp from "./app/Auth/otp";
import Resetpassword from "./app/Auth/reset-password";

const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1234567890",
  avatarUrl: "/images/photo-1685903772095-f07172808761.avif",
  dob: "2022-01-01",
  location: "USA",
};

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset-password" element={<Resetpassword />} />
      </Routes>
      <LayoutAdmin>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Profile user={mockUser} />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/profile" element={<Profile user={mockUser} />} />
          <Route path="usersmanagment" element={<UserManagement />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </LayoutAdmin>
    </>
  );
};

export default App;
