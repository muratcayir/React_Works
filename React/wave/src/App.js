import React from "react";
import Wave from "react-wavify";

function App() {
  return (
    <>
      <Wave
        paused={false}
        fill="#1277b0"
        options={{ height: 80, amplitude: 30, speed: 0.4, points: 6 }}
      />
    </>
  );
}

export default App;
