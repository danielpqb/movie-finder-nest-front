import Header from "./components/others/Header/Header";
import Movie from "./components/others/Movie/Movie";
import "./global-styles.scss";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Movie />
    </div>
  );
}
