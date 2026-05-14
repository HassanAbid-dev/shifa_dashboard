import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./SideBar";

const AppShell = () => {
  return (
    <div className="appShell">
      <Header />
      <div className="mainContent flex">
        <Sidebar />
        <main
          className="flex-1
        "
        >
          <Outlet /> {/* React Router puts the page here automatically */}
        </main>
      </div>
    </div>
  );
};

export default AppShell;
