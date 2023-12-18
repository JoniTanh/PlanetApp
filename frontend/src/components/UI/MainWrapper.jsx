/** @jsxImportSource @emotion/react */
import { useRef, useState, useEffect } from "react";
import {
  IlluminatorSVG,
  FrameSVGCorners,
  useFrameSVGAssemblingAnimation,
} from "@arwes/react-frames";
import { Animator } from "@arwes/react-animator";
import { GridLines, Puffs } from "@arwes/react-bgs";
import { motion } from "framer-motion";
import { createBleepsManager } from "@arwes/bleeps";

const bleepsManager = createBleepsManager({
  bleeps: {
    deploy: {
      sources: [{ src: "/sound/deploy.mp3", type: "audio/mpeg" }],
    },
  },
});

const BaseLayout = ({ children }) => {
  const svgRef = useRef(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  const playSound = () => {
    bleepsManager.bleeps.deploy.play();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleRender = () => {
    onRender();
    setTimeout(playSound, 150);
  };

  return (
    <div
      style={{
        position: "relative",
        maxWidth: 1000,
        width: "100%",
        height: "auto",
        minHeight: "600px",
        zIndex: 1,
        margin: "20px auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.7,
          top: 0,
          left: 0,
          zIndex: -1,
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
          elementRef={svgRef}
          onRender={handleRender}
        />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 1 }}
        style={{ padding: 20, position: "relative" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Illuminator = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        margin: "20px auto",
        maxWidth: "1000px",
        width: "100%",
        minHeight: "600px",
        height: "auto",
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
        <BaseLayout children={children} />
      </div>
    </div>
  );
};

const MainWrapper = ({ children }) => {
  return (
    <div>
      <Animator duration={{ enter: 1.5, exit: 0.5, interval: 3 }}>
        <GridLines
          lineColor="hsla(180, 100%, 75%, 0.2)"
          lineWidth={1}
          distance={120}
          horizontalLineDash={[4]}
          verticalLineDash={[4]}
        />
        <Puffs
          color="hsla(120, 100%, 75%, 0.5)"
          quantity={1000}
          padding={20}
          xOffset={[50, -100]}
          yOffset={[50, -100]}
          radiusOffset={[4, 0]}
        />
        <Illuminator>{children}</Illuminator>
      </Animator>
    </div>
  );
};

export default MainWrapper;
