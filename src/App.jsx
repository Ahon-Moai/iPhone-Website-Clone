import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
const App = () => {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <HighLights />
      </main>
    </>
  );
};

export default App;
