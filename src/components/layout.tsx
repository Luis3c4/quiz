import Header from "./header";
import Modulos from "./modulos";
import NavH from "./navH";
import Navleaf from "./navleft";
import {Outlet} from "react-router-dom"
function Layout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Navleaf />

      {/* Contenedor derecho */}
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4">
          <NavH />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
