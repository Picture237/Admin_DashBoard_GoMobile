import React from "react";
import "./topbar.css";
import pp from "../../image/user1.png";
import logo from "../../image/logo.png";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper flex items-center justify-between h-full ">
        <div className="topLeft">
          <span className="logo">
            <img src={logo} alt="" className="Logo" />
            <p className="nameLogo">GoMobile</p>
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={pp} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
