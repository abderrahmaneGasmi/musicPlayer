import React from "react";
import "../styles/components/main.scss";
import Svg from "../assets/Svg";
import { search } from "../static/icons";
export default function Main() {
  return (
    <div className="maincontainer">
      <Header />
    </div>
  );
}
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="/logo.png" alt="logo" />
        <div className="header__logo__text">MUUUSIC</div>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search for songs, artists, albums" />
        <Svg
          path={search.path}
          view={search.view}
          classlist="header__search__icon"
        />
      </div>
    </div>
  );
}
