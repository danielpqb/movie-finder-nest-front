import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../../contexts/movie";
import { RootState } from "../../../main";
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
            placeholder: "Search",
            value: search,
          }}
        />
        <SubmitButton>Search</SubmitButton>
        <SubmitButton>Clear</SubmitButton>
      </div>
    </div>
  );
}
