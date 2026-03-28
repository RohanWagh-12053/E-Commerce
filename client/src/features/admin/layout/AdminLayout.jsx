import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";
import AdminHeader from "../components/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Admin Sidebar */}
      <AdminSideBar />
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <AdminHeader />
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
