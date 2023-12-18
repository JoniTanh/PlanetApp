import MainWrapper from "./UI/MainWrapper";
import MissionForm from "./MissionForm";

export default function Launch() {
  return (
    <MainWrapper>
      <div style={{ fontSize: 18 }}>
        <div>
          Schedule a mission lauch for interstellar travel to one of the Kepler
          Exoplanets
        </div>
        <div>
          Only confirmed planets matching the following criteria are available
          for the earliest scheduled missions:
        </div>
        <div>
          <ul>
            <li>Planetary radius {"< 1.6"} times Earth's radius</li>
            <li>
              Effective stellar flux {">"} 0.36 times Earth's value and
              {" < 1.11 "}
              times Earth's value
            </li>
          </ul>
        </div>
      </div>
      <div>
        <MissionForm />
      </div>
    </MainWrapper>
  );
}
