import { Animation } from "react-animate-with-css";
import Header from "../others/Header/Header";
import Info from "../others/Info/Info";
import Movie from "../others/Movie/Movie";
import "./index.scss";

export default function Home() {
  return (
    <div className="home">
      <Header />

      <Info />

      <Animation
        id="movie"
        animateIn={{ name: "fadeInLeft" }}
      >
        <Movie />
      </Animation>
    </div>
  );
}
