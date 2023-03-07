import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import movieReducer from "./contexts/movie";
import { AnimationContextProvider } from "react-animate-with-css";
import { ThemeProvider } from "@ui5/webcomponents-react";

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AnimationContextProvider>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </AnimationContextProvider>
  </React.StrictMode>
);

export type RootState = ReturnType<typeof store.getState>;
