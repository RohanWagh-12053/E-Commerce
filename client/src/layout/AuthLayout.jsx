import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="flex items-center justify-center font-extrabold h-full w-1/2 bg-black text-white">
        <h4 className="text-4xl"> Welcome to Employee Reviews</h4>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
