import React from "react";
import MainWrapper from "./UI/MainWrapper";
import useLaunches from "../hooks/useLaunches";

export default function Upcoming() {
  const { launches, abortLaunch } = useLaunches();

  return (
    <MainWrapper>
      <div>
        <div>
          Upcoming missions including both SpaceX launches and newly scheduled
          rockets.
        </div>
        <div>Warning! Click on the 'x' aborts the mission.</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>No.</th>
              <th>Date</th>
              <th>Mission</th>
              <th>Rocket</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {launches.map((launch) => (
              <tr key={launch.flightNumber}>
                <td
                  onClick={() => abortLaunch(launch.flightNumber)}
                  style={{ color: "red" }}
                >
                  x
                </td>
                <td>{launch.flightNumber}</td>
                <td>{launch.launchDate}</td>
                <td>{launch.mission}</td>
                <td>{launch.rocket}</td>
                <td>{launch.destination}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainWrapper>
  );
}
