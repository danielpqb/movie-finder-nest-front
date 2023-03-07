import Header from "../others/Header/Header";
import Movie from "../others/Movie/Movie";
import "./index.scss";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Movie />
    </div>
  );
}
