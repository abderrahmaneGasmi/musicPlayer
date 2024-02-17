import React from "react";
import "../styles/components/main.scss";
import Svg from "../assets/Svg";
import {
  heart,
  music,
  next,
  play,
  previous,
  random,
  refresh,
  search,
  speaker1,
  speaker2,
  speakermute,
} from "../static/icons";
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
        <div className="maincontainer__title__text">Recently played songs</div>
        <div className="maincontainer__title__view">View all</div>
      </div>
      <div className="maincontainer__recentlyplayed">
        <RecentlyPlayedItem
          image="/genre (1).png"
          song="Song Title"
          artist="Artist Name"
        />
        <RecentlyPlayedItem
          image="/genre (2).png"
          song="Song Title"
          artist="Artist Name"
        />
        <RecentlyPlayedItem
          image="/genre (3).png"
          song="Song Title"
          artist="Artist Name"
        />
        <RecentlyPlayedItem
          image="/genre (4).jpg"
          song="Song Title"
          artist="Artist Name"
        />
        <RecentlyPlayedItem
          image="/genre (5).jpg"
          song="Song Title"
          artist="Artist Name"
        />
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
          background="/genre (4).jpg"
          avatar="/images/profile.jpg"
          genre="Jazz"
          desc="Jazz music"
          songs={20}
        />
        <Genre
          background="/genre (5).jpg"
          avatar="/images/logo (1).png"
          songs={20}
          genre="Classical"
          desc="Classical music"
        />
      </div>
      <div className="maincontainer__title">
        <div className="maincontainer__title__text">Trending songs</div>
        <div className="maincontainer__title__view">View all</div>
      </div>
      <div className="maincontainer__recentlyplayed">
        <RecentlyPlayedItem
          image="/genre (1).png"
          song="Song Title"
          artist="Artist Name"
        />
        <RecentlyPlayedItem
          image="/genre (2).png"
          song="Song Title"
          artist="Artist Name"
        />
        <RecentlyPlayedItem
          image="/genre (3).png"
          song="Song Title"
          artist="Artist Name"
        />
        <RecentlyPlayedItem
          image="/genre (4).jpg"
          song="Song Title"
          artist="Artist Name"
        />
        <RecentlyPlayedItem
          image="/genre (5).jpg"
          song="Song Title"
          artist="Artist Name"
        />
        <RecentlyPlayedItem
          image="/genre (1).png"
          song="Song Title"
          artist="Artist Name"
        />
        <RecentlyPlayedItem
          image="/genre (2).png"
          song="Song Title"
          artist="Artist Name"
        />
        <RecentlyPlayedItem
          image="/genre (3).png"
          song="Song Title"
          artist="Artist Name"
        />
        <RecentlyPlayedItem
          image="/genre (4).jpg"
          song="Song Title"
          artist="Artist Name"
        />
        <RecentlyPlayedItem
          image="/genre (5).jpg"
          song="Song Title"
          artist="Artist Name"
        />
      </div>
      <MediaPlayer
        song="Song Title"
        artist="Artist Name"
        image="/images/logo (1).png"
      />
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
function MediaPlayer({
  song,
  artist,
  image,
}: {
  song: string;
  artist: string;
  image: string;
}) {
  return (
    <div className="mediaplayer">
      <div className="mediaplayer__info">
        <div className="mediaplayer__info__image">
          <img src={image} alt="song" />
        </div>
        <div className="mediaplayer__info__text">
          <div className="mediaplayer__info__text__title">{song}</div>
          <div className="mediaplayer__info__text__artist">{artist}</div>
        </div>
        <div className="mediaplayer__info__icons">
          <Svg
            path={heart.path}
            view={heart.view}
            classlist="mediaplayer__info__icons__icon"
          />
        </div>
      </div>
      <div className="mediaplayer__controls">
        <div className="mediaplayer__controls__play">
          <div></div>
          <div className="mediaplayer__controls__play__container">
            <Svg
              path={random.path}
              view={random.view}
              classlist="mediaplayer__controls__play__smallicon"
            />
            <Svg
              path={previous.path}
              view={previous.view}
              classlist="mediaplayer__controls__play__smallicon"
            />
            <Svg
              path={play.path}
              view={play.view}
              classlist="mediaplayer__controls__play__icon"
            />{" "}
            <Svg
              path={next.path}
              view={next.view}
              classlist="mediaplayer__controls__play__smallicon"
            />
            <Svg
              path={refresh.path}
              view={refresh.view}
              classlist="mediaplayer__controls__play__smallicon"
            />
          </div>{" "}
          <div className="mediaplayer__controls__play__container">
            <Svg
              path={speaker2.path}
              view={speaker2.view}
              classlist="mediaplayer__controls__play__smallicon"
            />

            <div className="mediaplayer__controls__play__soundbar">
              <div className="mediaplayer__controls__play__soundbar__progress"></div>
            </div>
          </div>
        </div>
        <div className="mediaplayer__controls__progress">
          <div className="mediaplayer__controls__progress__time">00:00</div>
          <div className="mediaplayer__controls__progress__bar">
            <div className="mediaplayer__controls__progress__bar__progress"></div>
          </div>
          <div className="mediaplayer__controls__progress__time">03:00</div>
        </div>
      </div>
      <div className="mediaplayer__overlay"></div>
    </div>
  );
}
function RecentlyPlayedItem({
  song,
  artist,
  image,
}: {
  song: string;
  artist: string;
  image: string;
}) {
  return (
    <div className="recentlyplayed">
      <div className="recentlyplayed__image">
        <img src={image} alt="song" />
      </div>
      <div className="recentlyplayed__text">
        <div className="recentlyplayed__text__title">{song}</div>
        <div className="recentlyplayed__text__artist">{artist}</div>
      </div>
    </div>
  );
}
