import React from "react";
import "../styles/components/leftbar.scss";
import Svg from "../assets/Svg";
import { explore, home, music, trending } from "../static/icons";
export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbar__nav">
        <Navitem icon={home} text="Home" />
        <Navitem icon={music} text="Followed" />
        <Navitem icon={explore} text="Explore" />
        <Navitem icon={trending} text="Trending" />
      </div>
      <div className="leftbar__seperator"></div>
      <div className="leftbar__channels">
        <div className="leftbar__channels__header">Followed Channels</div>
        <Channel avatar="/images/logo (1).png" name="Channel 1" />
        <Channel avatar="/images/logo (2).png" name="Channel 2" />
        <Channel avatar="/images/logo (3).png" name="Channel 3" />
        <Channel avatar="https://picsum.photos/200" name="Channel 4" />
      </div>
    </div>
  );
}
function Navitem({
  icon,
  text,
}: {
  icon: {
    path: string;
    view: string;
  };
  text: string;
}) {
  return (
    <div className="navitem">
      <Svg path={icon.path} view={icon.view} classlist="navitem__icon" />
      <div className="navitem__text">{text}</div>
    </div>
  );
}
function Channel({ avatar, name }: { avatar: string; name: string }) {
  return (
    <div className="channelitem">
      <div className="channelitem__avatar">
        <img src={avatar} alt={name} />
      </div>
      <div className="channelitem__name">{name}</div>
    </div>
  );
}
