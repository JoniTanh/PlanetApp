/** @jsxImportSource @emotion/react */
import { FrameSVGUnderline } from "@arwes/react";
import { useEffect, useState } from "react";
import { Animator } from "@arwes/react-animator";
import { Text } from "@arwes/react-text";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import "../index.css";
import { createBleepsManager } from "@arwes/bleeps";
import { NavLink } from "react-router-dom";

const bleepsManager = createBleepsManager({
  bleeps: {
    click: {
      sources: [{ src: "/sound/click.mp3", type: "audio/mpeg" }],
    },
  },
});

const NavBar = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const tid = setInterval(() => setActive((active) => !active), 5000);
    return () => clearInterval(tid);
  });

  const playSound = () => {
    bleepsManager.bleeps.click.play();
  };

  return (
    <div
      className="sixCapsFont"
      style={{
        position: "relative",
        width: "100%",
        height: 100,
      }}
    >
      <FrameSVGUnderline
        css={{
          "[data-name=bg]": {
            color: "rgba(0, 51, 51, 0.8)",
          },
          "[data-name=line]": {
            color: "hsl(180, 75%, 50%)",
          },
        }}
        strokeWidth={2}
      />
      <div
        style={{
          margin: "0 auto",
          maxWidth: 1000,
          padding: "20px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <img
          src="/img/exoplanet.png"
          alt="exoplanet"
          style={{ width: "60px", marginTop: 0 }}
        />
        <a href="https://arwes.dev" target="_blank" onClick={playSound}>
          <img
            src="/img/arwes-logo.png"
            alt="Arwes logo"
            style={{ width: "60px", marginTop: 0, cursor: "pointer" }}
          />
        </a>
        <span style={{ fontSize: "35px", color: "hsl(180, 75%, 50%)" }}>
          <Animator active={active} duration={{ enter: 1.5, exit: 6 }}>
            <Text
              style={{ color: "#ddd", fontFamily: "monospace" }}
              manager="decipher"
              easing="outSine"
              fixed
            >
              Mission Kepler
            </Text>
          </Animator>
        </span>
        <div
          style={{
            fontSize: "20px",
            color: "hsl(180, 75%, 50%)",
            display: "flex",
            gap: 30,
            paddingLeft: "50px",
          }}
        >
          <NavLink
            to="/"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              color: "hsl(180, 75%, 50%)",
            }}
            onClick={playSound}
            className={({ isActive }) =>
              isActive ? "active-link" : "not-active-link"
            }
          >
            <RocketLaunchIcon style={{ fontSize: 40 }} />
            <span>Launch</span>
          </NavLink>

          <NavLink
            to="/upcoming"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              color: "hsl(180, 75%, 50%)",
            }}
            onClick={playSound}
            className={({ isActive }) =>
              isActive ? "active-link" : "not-active-link"
            }
          >
            <TravelExploreIcon style={{ fontSize: 40 }} />
            <span>Upcoming</span>
          </NavLink>

          <NavLink
            to="/history"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              color: "hsl(180, 75%, 50%)",
            }}
            onClick={playSound}
            className={({ isActive }) =>
              isActive ? "active-link" : "not-active-link"
            }
          >
            <ManageHistoryIcon style={{ fontSize: 40 }} />
            <span>History</span>
          </NavLink>

          <NavLink
            to="/news"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              color: "hsl(180, 75%, 50%)",
            }}
            onClick={playSound}
            className={({ isActive }) =>
              isActive ? "active-link" : "not-active-link"
            }
          >
            <NewspaperIcon style={{ fontSize: 40 }} />
            <span>News</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
