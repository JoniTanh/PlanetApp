import MainWrapper from "./UI/MainWrapper";
import MissionForm from "./MissionForm";
import { createThemeColor } from "@arwes/theme";

const themeColors = {
  hueVariation: createThemeColor((i) => [i * 18, 50, 50, 1]),
  lightnessVariation: createThemeColor((i) => [180, 50, i * 5, 1]),
  saturationVariation: createThemeColor((i) => [180, i * 5, 50, 1]),
};

export default function Launch() {
  const textColor = themeColors.lightnessVariation(13);
  return (
    <MainWrapper>
      <div style={{ fontSize: 18, color: textColor }}>
        <div style={{ marginBottom: "20px" }}>
          Schedule a mission lauch for interstellar travel to one of the Kepler
          Exoplanets
        </div>
        <div style={{ marginBottom: "20px" }}>
          Only confirmed planets matching the following criteria are available
          for the earliest scheduled missions:
        </div>
        <div>
          <ul style={{ marginLeft: "40px" }}>
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
        <MissionForm textColor={textColor} />
      </div>
    </MainWrapper>
  );
}
