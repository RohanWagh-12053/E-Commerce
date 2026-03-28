import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "../components/UserSidebar";
import UserHeader from "../components/UserHeader";

const UserLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Admin Sidebar */}
      <UserSidebar />
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <UserHeader />
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
