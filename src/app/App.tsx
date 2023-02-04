import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";

import { MainPage } from "pages/MainPage/";
import { AboutPage } from "pages/AboutPage";

import { classNames } from "shared/lib/classNames";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <div>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
