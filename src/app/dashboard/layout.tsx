import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-roboto flex items-center  justify-center h-full  bg-gradient-to-b from-slate-800 via-blue-500  to-blue-900">
      {children}
    </div>
  );
};

export default AuthLayout;
