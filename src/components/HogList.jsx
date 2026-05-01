import HogCard from "./HogCard";

function HogList({ hogs, hideHog }) {
  return (
    <div className="ui grid container">
      {hogs.map(hog => (
        <HogCard key={hog.name} hog={hog} hideHog={hideHog} />
      ))}
    </div>
  );
}

export default HogList;