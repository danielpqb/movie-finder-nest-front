import { useDispatch, useSelector } from "react-redux";
import { setMovie, setSearch } from "../../../contexts/movie";
import { RootState } from "../../../main";
import { getMoviesByTitle } from "../../../services/movies-services";
import InputBox from "../InputBox/InputBox";
import SubmitButton from "../SubmitButton/SubmitButton";
import { RiMovie2Line } from "react-icons/ri";
import "./index.scss";

export default function Header() {
  const search = useSelector((state: RootState) => state.movie.search);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="logo">
        <RiMovie2Line
          size={"40px"}
          fill={"rgba(255,255,255,0.9)"}
        />
      </div>
      <div className="search">
        <InputBox
          data={{
            name: "movie",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(setSearch(e.target.value));
            },
            placeholder: "Search movies by title",
            value: search,
          }}
        />
        <SubmitButton
          onClick={async () => {
            const res = await getMoviesByTitle(search);
            console.log(res.data);

            dispatch(setMovie(res.data));
          }}
        >
          Search
        </SubmitButton>
        <SubmitButton
          style={{ backgroundColor: "rgba(100, 100, 100, 0.4)" }}
          onClick={() => {
            dispatch(setSearch(""));
            dispatch(setMovie({}));
          }}
        >
          Clear
        </SubmitButton>
      </div>
    </div>
  );
}
