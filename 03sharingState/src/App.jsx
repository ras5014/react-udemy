import "./App.css";
import React from "react";
import { useState } from "react";
import Panel from "./components/Panel";
function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" isActive={isActive}>
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology" isActive={isActive}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

export default App;
