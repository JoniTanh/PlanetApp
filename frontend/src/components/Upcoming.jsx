import MainWrapper from "./UI/MainWrapper";
import useLaunches from "../hooks/useLaunches";
import { createThemeColor } from "@arwes/theme";
import { createBleepsManager } from "@arwes/bleeps";

const bleepsManager = createBleepsManager({
  bleeps: {
    abort: {
      sources: [{ src: "/sound/abort.mp3", type: "audio/mpeg" }],
    },
  },
});

const themeColors = {
  hueVariation: createThemeColor((i) => [i * 18, 50, 50, 1]),
  lightnessVariation: createThemeColor((i) => [180, 50, i * 5, 1]),
  saturationVariation: createThemeColor((i) => [180, i * 5, 50, 1]),
};

export default function Upcoming() {
  const { launches, abortLaunch } = useLaunches();
  const textColor = themeColors.lightnessVariation(13);

  const upcomingLaunches = launches.filter((launch) => launch.upcoming);

  const playSound = () => {
    bleepsManager.bleeps.abort.play();
  };

  const handleAbort = (flightNumber) => {
    abortLaunch(flightNumber);
    playSound();
  };

  return (
    <MainWrapper>
      <div style={{ fontSize: 18, color: textColor }}>
        <div>
          Upcoming missions including both Mission Kepler launches and newly
          scheduled rockets.
        </div>
        <div>
          Warning! Click on the <span style={{ color: "red" }}>x</span> aborts
          the mission.
        </div>
        <table>
          <thead>
            <tr style={{ color: textColor }}>
              <th></th>
              <th>No.</th>
              <th>Date</th>
              <th>Mission</th>
              <th>Rocket</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {upcomingLaunches.map((launch) => (
              <tr key={launch.flightNumber}>
                <td
                  onClick={() => handleAbort(launch.flightNumber)}
                  style={{ color: "red", cursor: "pointer" }}
                >
                  x
                </td>
                <td>{launch.flightNumber}</td>
                <td>{launch.launchDate}</td>
                <td>{launch.mission}</td>
                <td>{launch.rocket}</td>
                <td>{launch.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainWrapper>
  );
}
