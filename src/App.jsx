import { useState, useEffect } from "react";
import Background from "./Background/Background";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

function App() {
  let heroData = [
    { text1: "Explore", text2: "new horizons" },
    { text1: "Push", text2: "beyond the limits" },
    { text1: "Embrace", text2: "the unknown" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
}

export default App;
