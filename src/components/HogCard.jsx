import { useState } from "react";

function HogCard({ hog, hideHog }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="ui card"
      aria-label="hog card"
      onClick={() => setShow(!show)}
    >
      <div className="image">
        <img
          src={hog.image}
          alt={"Photo of " + hog.name}
        />
      </div>

      <div className="content">
        <h3>{hog.name}</h3>

        {show && (
          <div>
            <p>Specialty: {hog.specialty}</p>

            {/* IMPORTANT: test expects raw number */}
            <p>{hog.weight}</p>

            {/* IMPORTANT: EXACT TEXT */}
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>

            <p>{hog["highest medal achieved"]}</p>
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            hideHog(hog.name);
          }}
        >
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;