import MainWrapper from "./UI/MainWrapper";
import useLaunches from "../hooks/useLaunches";
import { createThemeColor } from "@arwes/theme";

const themeColors = {
  hueVariation: createThemeColor((i) => [i * 18, 50, 50, 1]),
  lightnessVariation: createThemeColor((i) => [180, 50, i * 5, 1]),
  saturationVariation: createThemeColor((i) => [180, i * 5, 50, 1]),
};

export default function History() {
  const { launches, abortLaunch } = useLaunches([]);
  const textColor = themeColors.lightnessVariation(13);

  const historicalLaunches = launches.filter((launch) => !launch.upcoming);

  return (
    <MainWrapper>
      <div style={{ fontSize: 18, color: textColor }}>
        <div>
          History of mission launches including Mission Kepler launches starting
          from the year 2006.
        </div>
        <div>
          <table>
            <thead>
              <tr style={{ color: textColor }}>
                <th></th>
                <th>No.</th>
                <th>Date</th>
                <th>Mission</th>
                <th>Rocket</th>
                <th>Customers</th>
              </tr>
            </thead>
            <tbody>
              {historicalLaunches.map((launch) => (
                <tr key={launch.flightNumber}>
                  <td></td>
                  <td>{launch.flightNumber}</td>
                  <td>{launch.launchDate}</td>
                  <td>{launch.mission}</td>
                  <td>{launch.rocket}</td>
                  <td>{launch.customers.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainWrapper>
  );
}
