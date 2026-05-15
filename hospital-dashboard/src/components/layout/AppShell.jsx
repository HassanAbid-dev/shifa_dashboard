import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./SideBar";

const AppShell = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* full screen height */}
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* fills remaining height */}
        <Sidebar />
        <main className="flex-1 overflow-hidden">
          {/* no padding here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AppShell;
