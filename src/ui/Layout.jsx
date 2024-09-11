import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="flex">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
