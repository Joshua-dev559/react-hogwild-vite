import { useState } from "react";
import hogsData from "../porkers_data";
import HogList from "./HogList";
import HogForm from "./HogForm";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [hidden, setHidden] = useState([]);

  function addHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  function hideHog(name) {
    setHidden([...hidden, name]);
  }

  let visibleHogs = hogs
    .filter(hog => !hidden.includes(hog.name))
    .filter(hog => (greasedOnly ? hog.greased : true));

  if (sortBy === "name") {
    visibleHogs.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "weight") {
    visibleHogs.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">

      <h1>HogWild</h1>

      {/* FILTER */}
      <div>
        <label htmlFor="grease">Greased Pigs Only?</label>
        <input
          id="grease"
          type="checkbox"
          onChange={(e) => setGreasedOnly(e.target.checked)}
        />
      </div>

      {/* SORT */}
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      {/* FORM */}
      <HogForm addHog={addHog} />

      {/* LIST */}
      <HogList hogs={visibleHogs} hideHog={hideHog} />

    </div>
  );
}

export default App;