import React from "react";
import "../styles/components/rightbar.scss";
import Svg from "../assets/Svg";
import { bell, chat, settings } from "../static/icons";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar__icons">
        <div className="rightbar__icons__icon">
          <Svg
            path={bell.path}
            view={bell.view}
            classlist="rightbar__icons__icon__svg rightbar__icons__icon__svg__active"
            pathtags={{
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }}
          />
          <div className="rightbar__icons__icon__badge"></div>
        </div>
        <div className="rightbar__icons__icon ">
          <Svg
            path={chat.path}
            view={chat.view}
            classlist="rightbar__icons__icon__svg rightbar__icons__icon__svg__active"
          />
          <div className="rightbar__icons__icon__badge"></div>
        </div>
        <Svg
          path={settings.path}
          view={settings.view}
          classlist="rightbar__icons__icon__svg"
          pathtags={{
            fillRule: "evenodd",
            clipRule: "evenodd",
          }}
        />
      </div>
      <div className="rightbar__profile">
        {/* <div className="rightbar__profile__image">
          <img src="/images/profile.jpg" alt="profile" className="" />
        </div> */}

        <div className="octagonWrap">
          <div
            className="octagon"
            style={{
              backgroundImage: "url(/images/profile.jpg)",
            }}
          ></div>
        </div>
      </div>
      <div className="rightbar__profile__name">
        <h3>John Doe</h3>
        <p>@johndoe</p>
      </div>
    </div>
  );
}
