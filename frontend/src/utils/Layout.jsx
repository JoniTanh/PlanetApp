import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
}
