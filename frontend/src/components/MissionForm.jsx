/** @jsxImportSource @emotion/react */
import { useMemo } from "react";
import usePlanets from "../hooks/usePlanets";
import useLaunches from "../hooks/useLaunches";
import { createBleepsManager } from "@arwes/bleeps";
import styles from "../assets/missionForm.module.css";
import { FrameSVGCorners } from "@arwes/react";
import { createThemeColor } from "@arwes/theme";

const FrameButton = ({ children }) => {
  const greenColor = createThemeColor((i) => [i * 10, 100, 50, 1]);
  const rgbaBorderColor = `rgba(0, 128, 0, 0.5)`;

  return (
    <div
      style={{
        position: "relative",
        width: "60%",
        height: "50px",
        marginTop: "20px",
      }}
    >
      <FrameSVGCorners
        css={{
          "[data-name=bg]": {
            color: "rgba(18, 147, 154, 0.2)",
          },
          "[data-name=line]": {
            color: greenColor(10),
          },
        }}
      />
      <button
        type="submit"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          background: "none",
          cursor: "pointer",
          color: greenColor(10),
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: `0.1px solid ${rgbaBorderColor}`,
            width: "99%",
            height: "92%",
            margin: "auto",
          }}
        >
          {children}
        </div>
      </button>
    </div>
  );
};

const MissionForm = ({ textColor }) => {
  const planets = usePlanets();

  const selectorBody = useMemo(() => {
    return planets?.map((planet) => (
      <option value={planet.kepler_name} key={planet.kepler_name}>
        {planet.kepler_name}
      </option>
    ));
  });

  const today = new Date().toISOString().split("T")[0];

  const bleepsManager = createBleepsManager({
    bleeps: {
      success: {
        sources: [{ src: "/sound/success.mp3", type: "audio/mpeg" }],
      },
      warning: {
        sources: [{ src: "/sound/warning.mp3", type: "audio/mpeg" }],
      },
    },
  });

  const { submitLaunch } = useLaunches(bleepsManager);

  return (
    <>
      <form onSubmit={submitLaunch} className={styles.missionForm}>
        <label
          htmlFor="launch-day"
          className={styles.label}
          style={{ color: textColor }}
        >
          Launch Date<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="date"
          id="launch-day"
          name="launch-day"
          min={today}
          defaultValue={today}
          className={styles.input}
        />
        <label
          htmlFor="mission-name"
          className={styles.label}
          style={{ color: textColor }}
        >
          Mission Name<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          id="mission-name"
          name="mission-name"
          className={styles.input}
        />
        <label
          htmlFor="rocket-name"
          className={styles.label}
          style={{ color: textColor }}
        >
          Rocket Name<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          id="rocket-name"
          name="rocket-name"
          defaultValue="Explorer XCV"
          className={styles.input}
        />
        <label
          htmlFor="planets-selector"
          className={styles.label}
          style={{ color: textColor }}
        >
          Destination Exoplanet<span style={{ color: "red" }}>*</span>
        </label>
        <select
          id="planets-selector"
          name="planets-selector"
          className={styles.select}
        >
          {selectorBody}
        </select>

        <FrameButton>Launch Rocket</FrameButton>
      </form>
    </>
  );
};

export default MissionForm;
