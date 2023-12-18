import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Global } from "@emotion/react";
import { createAppTheme } from "@arwes/theme";
import { createAppStylesBaseline } from "@arwes/core";

const theme = createAppTheme((i) => [180, i * 5, 50, 1]);
const stylesBaseline = createAppStylesBaseline(theme);

export default function Layout() {
  return (
    <div style={{ minHeight: "calc(100vh - 10px)" }}>
      <Global styles={stylesBaseline} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
}
