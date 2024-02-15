import React, { useState } from "react";
import "../styles/components/leftbar.scss";
import Svg from "../assets/Svg";
import {
  collapseleft,
  collapseright,
  explore,
  home,
  music,
  trending,
} from "../static/icons";
import { motion } from "framer-motion";
export default function Leftbar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <motion.div
      className="leftbar"
      style={{
        width: collapsed ? "5rem" : "18rem",
      }}
      animate={{ width: collapsed ? "5rem" : "18rem" }}
      transition={{ duration: 0.5 }}
    >
      <div className="leftbar__nav">
        {!collapsed && (
          <>
            <Navitem icon={home} text="Home" />
            <Navitem icon={music} text="Followed" />
            <Navitem icon={explore} text="Explore" />
            <Navitem icon={trending} text="Trending" />
          </>
        )}
        {collapsed && (
          <>
            <NavitemCollapsed icon={home} />
            <NavitemCollapsed icon={music} />
            <NavitemCollapsed icon={explore} />
            <NavitemCollapsed icon={trending} />
          </>
        )}
      </div>
      <div className="leftbar__seperator"></div>
      <div className="leftbar__channels">
        {!collapsed && (
          <div className="leftbar__channels__header">Followed Channels</div>
        )}
        {!collapsed && (
          <>
            <Channel avatar="/images/logo (1).png" name="Channel 1" />
            <Channel avatar="/images/logo (2).png" name="Channel 2" />
            <Channel avatar="/images/logo (3).png" name="Channel 3" />
            <Channel avatar="https://picsum.photos/200" name="Channel 4" />
          </>
        )}
        {collapsed && (
          <>
            <ChannelCollapsed avatar="/images/logo (1).png" />
            <ChannelCollapsed avatar="/images/logo (2).png" />
            <ChannelCollapsed avatar="/images/logo (3).png" />
            <ChannelCollapsed avatar="https://picsum.photos/200" />
          </>
        )}
      </div>
      <div
        className="leftbar__floatbtn"
        onClick={() => setCollapsed(!collapsed)}
      >
        <Svg
          path={!collapsed ? collapseleft.path : collapseright.path}
          view={!collapsed ? collapseleft.view : collapseright.view}
          classlist="leftbar__floatbtn__icon"
          pathtags={{
            clipRule: "evenodd",
            fillRule: "evenodd",
          }}
        />
      </div>
    </motion.div>
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
function NavitemCollapsed({
  icon,
}: {
  icon: {
    path: string;
    view: string;
  };
}) {
  return (
    <div className="navitem">
      <Svg path={icon.path} view={icon.view} classlist="navitem__icon" />
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
function ChannelCollapsed({ avatar }: { avatar: string }) {
  return (
    <div className="channelitem">
      <div className="channelitem__avatar">
        <img src={avatar} alt="channel" />
      </div>
    </div>
  );
}
