import { Animation } from "react-animate-with-css";
import Header from "../others/Header/Header";
import Info from "../others/Info/Info";
import Movie from "../others/Movie/Movie";
import bgImg from "../../assets/bg-waves.svg";

import "./index.scss";

export default function Home() {
  return (
    <div className="home">
      <img
        src={bgImg}
        className="home-bg"
      />

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
