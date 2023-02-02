import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { MainPageAsync as MainPage } from "./pages/MainPage.async";
import { AboutPageAsync as AboutPage } from "./pages/AboutPage.async";

import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classnames";

import "./styles/index.scss";

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
