import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../main";
import "./index.scss";

export default function Movie() {
  const movie = useSelector((state: RootState) => state.movie.value);

  return (
    <div className="movie">
      <div className="data">
        <div className="title">{movie.title}</div>
        <div className="description">{movie.description}</div>
        <div className="actors">
          <strong>Actors</strong>
          {movie.actors}
        </div>
        <div className="rating">
          <strong>Rating</strong>
          {movie.rating}
        </div>
        <div className="favorite"></div>
      </div>

      <div className="poster">
        <img src={movie.img}></img>
      </div>
    </div>
  );
}
