import { useDispatch, useSelector } from "react-redux";
import { setMovie, setSearch } from "../../../contexts/movie";
import { RootState } from "../../../main";
import { getMoviesByTitle } from "../../../services/movies-services";
import InputBox from "../InputBox/InputBox";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./index.scss";

export default function Header() {
  const search = useSelector((state: RootState) => state.movie.search);
  const dispatch = useDispatch();

  return (
    <div className="header">
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
          style={{ backgroundColor: "rgba(140,140,140)" }}
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
