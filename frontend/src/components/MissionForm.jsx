import React, { useMemo } from "react";
import usePlanets from "../hooks/usePlanets";
import useLaunches from "../hooks/useLaunches";
import { createBleepsManager } from "@arwes/bleeps";

const MissionForm = () => {
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
    <form onSubmit={submitLaunch}>
      <label htmlFor="launch-day">Launch Date</label>
      <input
        type="date"
        id="launch-day"
        name="launch-day"
        min={today}
        defaultValue={today}
      />
      <label htmlFor="mission-name">Mission Name</label>
      <input type="text" id="mission-name" name="mission-name" />
      <label htmlFor="rocket-name">Rocket Name</label>
      <input
        type="text"
        id="rocket-name"
        name="rocket-name"
        defaultValue="Explorer XCV"
      />

      <label htmlFor="planets-selector">Destination Exoplanet</label>
      <select id="planets-selector" name="planets-selector">
        {selectorBody}
      </select>

      <button type="submit">Launch Rocket</button>
    </form>
  );
};

export default MissionForm;
