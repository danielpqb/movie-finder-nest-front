import { Animation } from "react-animate-with-css";
import "./index.scss";

export default function Info() {
  return (
    <div className="info">
      <Animation
        id="movie"
        animateIn={{ name: "fadeIn" }}
      >
        <div className="title">Movie Finder</div>
        <div className="text">Find all movies you can think of. Check it's rating, plot, actors and poster.</div>
      </Animation>
    </div>
  );
}
