import MainWrapper from "./UI/MainWrapper";
import { createThemeColor } from "@arwes/theme";

const themeColors = {
  hueVariation: createThemeColor((i) => [i * 18, 50, 50, 1]),
  lightnessVariation: createThemeColor((i) => [180, 50, i * 5, 1]),
  saturationVariation: createThemeColor((i) => [180, i * 5, 50, 1]),
};

export default function News() {
  const textColor = themeColors.lightnessVariation(13);

  return (
    <MainWrapper>
      <div style={{ fontSize: 18, color: textColor }}>
        <div>Coming soon...</div>
      </div>
    </MainWrapper>
  );
}
