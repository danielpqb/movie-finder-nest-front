import { useDispatch, useSelector } from "react-redux";
import { setMovie, setSearch } from "../../../contexts/movie";
import { RootState } from "../../../main";
import { getMoviesByTitle } from "../../../services/movies-services";
import InputBox from "../InputBox/InputBox";
import SubmitButton from "../SubmitButton/SubmitButton";
import { RiMovie2Line } from "react-icons/ri";
import { Animation, useAnimate } from "react-animate-with-css";
import { useState } from "react";
import { Bar, Button, Modals } from "@ui5/webcomponents-react";

import "./index.scss";

export default function Header() {
  const search = useSelector((state: RootState) => state.movie.search);
  const dispatch = useDispatch();

  const { animate } = useAnimate();

  const [disabled, setDisabled] = useState(false);

  return (
    <div className="header">
      <Animation animateIn={{ name: "fadeInRight" }}>
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
            disabled={disabled}
            onClick={async () => {
              setDisabled(true);
              try {
                const res = await getMoviesByTitle(search);

                dispatch(setMovie(res.data));

                animate({ id: "movie", name: "flipInX" });
              } catch {
                setDisabled(false);
                const { ref, close } = Modals.showDialog({
                  state: "Error",
                  headerText: "Error",
                  style: { backgroundColor: "white" },
                  children: "This movie title does not exist.",
                  footer: (
                    <Bar
                      endContent={
                        <Button onClick={() => close()}>Close</Button>
                      }
                    />
                  ),
                });
              }
              setDisabled(false);
            }}
          >
            Search
          </SubmitButton>
          <SubmitButton
            style={{ backgroundColor: "rgba(100, 100, 100, 0.4)" }}
            onClick={() => {
              dispatch(setSearch(""));
            }}
          >
            Clear
          </SubmitButton>
        </div>
      </Animation>
    </div>
  );
}
