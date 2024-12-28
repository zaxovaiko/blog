"use client";

import Snowfall from "react-snowfall";

const canvasStyles = {
  height: "30vh",
};

export function Snow() {
  return (
    <Snowfall
      style={canvasStyles}
      snowflakeCount={100}
      rotationSpeed={[-2, 1]}
      radius={[0.5, 2]}
      speed={[0, 2]}
    />
  );
}
