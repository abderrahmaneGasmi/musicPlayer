import React from "react";
import "../styles/components/main.scss";
import Svg from "../assets/Svg";
import { music, search } from "../static/icons";
export default function Main() {
  return (
    <div className="maincontainer">
      <Header />
      <div className="banner">
        <img src="/banner.png" alt="banner" />
        <div className="banner__text">
          <div className="banner__text__title">Discover new music</div>
          <div className="banner__text__subtitle">
            Listen to new releases, curated playlists, and more.
          </div>
        </div>
        <div className="banner__overlay"></div>
      </div>
      <div className="maincontainer__title">
        <div className="maincontainer__title__text">Trending Genres</div>
        <div className="maincontainer__title__view">View all</div>
      </div>
      <div className="maincontainer__genres">
        <Genre
          genre="Pop"
          background="/genre (1).png"
          avatar="/images/logo (1).png"
          desc="The best of pop music"
          songs={20}
        />
        <Genre
          genre="Rock"
          background="/genre (2).png"
          avatar="/images/logo (2).png"
          desc="Rock and roll"
          songs={20}
        />
        <Genre
          genre="Hip Hop"
          background="/genre (3).png"
          avatar="/images/logo (3).png"
          desc="Hip hop music"
          songs={20}
        />
        <Genre
          genre="Pop"
          background="/genre (1).png"
          avatar="/images/logo (1).png"
          desc="The best of pop music"
          songs={20}
        />
        <Genre
          genre="Rock"
          background="/genre (2).png"
          avatar="/images/logo (2).png"
          desc="Rock and roll"
          songs={20}
        />
        <Genre
          genre="Hip Hop"
          background="/genre (3).png"
          avatar="/images/logo (3).png"
          desc="Hip hop music"
          songs={20}
        />
      </div>
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
function Genre({
  avatar,
  background,
  desc,
  genre,
  songs,
}: {
  genre: string;
  background: string;
  avatar: string;
  desc: string;
  songs: number;
}) {
  return (
    <div className="genre">
      <div className="genre__background">
        <img src={background} alt="background" />
      </div>

      <div className="genre__details">
        {" "}
        <div className="genre__details__container">
          <div className="genre__details__container__avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="genre__details__container__text">
            <div className="genre__details__container__text__title">
              {genre}
            </div>
            <div className="genre__details__container__text__desc">{desc}</div>
            <div className="genre__details__container__text__songs">
              <Svg
                path={music.path}
                view={music.view}
                classlist="genre__details__container__text__songs__icon"
              />
              <div className="genre__details__container__text__songs__text">
                {songs} songs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
