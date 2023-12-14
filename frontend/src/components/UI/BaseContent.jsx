/** @jsxImportSource @emotion/react */

import { IlluminatorSVG } from "@arwes/react-frames";
import { FrameSVGCorners } from "@arwes/react-frames";
import { Animator } from "@arwes/react-animator";
import { GridLines } from "@arwes/react-bgs";

const Content = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        width: 1000,
        height: 600,
        zIndex: 1,
        margin: "20px auto",
        opacity: 0.6,
      }}
    >
      <FrameSVGCorners
        css={{
          "[data-name=bg]": {
            color: "hsl(180, 75%, 10%)",
            border: "1px solid red",
          },
          "[data-name=line]": {
            color: "hsl(180, 75%, 50%)",
          },
        }}
        cornerLength={32}
        strokeWidth={3}
      />
      {children}
    </div>
  );
};

const Illuminator = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        margin: "20px auto",
        width: "1000px",
        height: "600px",
      }}
    >
      <svg
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1000 600"
      >
        <IlluminatorSVG color="hsl(180 50% 50% / 20%)" size={1000} />
      </svg>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <Content children={children} />
      </div>
    </div>
  );
};

const BaseContent = ({ children }) => {
  return (
    <div>
      <Animator duration={{ enter: 0.5, exit: 0.5 }}>
        <GridLines
          lineColor="hsla(180, 100%, 75%, 0.2)"
          lineWidth={1}
          distance={120}
          horizontalLineDash={[4]}
          verticalLineDash={[4]}
        />
        <Illuminator>{children}</Illuminator>
      </Animator>
    </div>
  );
};

export default BaseContent;
