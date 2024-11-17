import React from "react";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-row min-h-screen w-full bg-background">
      <div className="flex flex-[1.5] p-3">{children}</div>
      <div className="flex-[2] p-3 flex  bg-primary-button">
        <div className="w-full h-full rounded-md text-white p-10 flex">
          <div className="h-5/6 w-full flex flex-col gap-3">
            <h1 className="text-5xl w-4/6">Organize and Sell your courses.</h1>
            <h1 className="text-md w-4/6">
              Create and share courses effortlessly.
            </h1>
            <div className="p-10 h-full">
              <div className="animate-pulse bg-gray-400 h-full w-full rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
