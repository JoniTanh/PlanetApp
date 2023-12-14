import React, { useState } from "react";

const MissionForm = () => {
  const [launchDate, setLaunchDate] = useState("");
  const [missionName, setMissionName] = useState("");
  const [rocketType, setRocketType] = useState("");
  const [destinationExoplanet, setDestinationExoplanet] = useState("");

  // TODO: Replace with real data
  const exoplanetOptions = [
    { value: "exoplanet-1", label: "Exoplanet 1" },
    { value: "exoplanet-2", label: "Exoplanet 2" },
    { value: "exoplanet-3", label: "Exoplanet 3" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO
    console.log({ launchDate, missionName, rocketType, destinationExoplanet });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Launch Date:
          <input
            type="date"
            value={launchDate}
            onChange={(e) => setLaunchDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Mission Name:
          <input
            type="text"
            value={missionName}
            onChange={(e) => setMissionName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Rocket Type:
          <input
            type="text"
            value={rocketType}
            onChange={(e) => setRocketType(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Destination Exoplanet:
          <select
            value={destinationExoplanet}
            onChange={(e) => setDestinationExoplanet(e.target.value)}
          >
            {exoplanetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MissionForm;
