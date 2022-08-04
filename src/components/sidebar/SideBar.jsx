import "./sidebar.css";
import {
  Home,
  TrendingUp,
  ChatBubbleOutline,
  DynamicFeed,
  PersonAddAlt,
  Folder,
  Apple,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard </h3>
          <ul className="sidebarList">
            <Link to="/">
              <li className="sidebarListItem active">
                <Home className="sidebarIcon" />
                Home{" "}
              </li>
            </Link>
            <Link to="/categories">
              <li className="sidebarListItem">
                <Folder className="sidebarIcon" />
                Categories{" "}
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                {" "}
                <Apple className="sidebarIcon" />
                Products{" "}
              </li>
            </Link>
            <Link to="/analystic">
              <li className="sidebarListItem">
                {" "}
                <TrendingUp className="sidebarIcon" />
                Analystics{" "}
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Personal </h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                {" "}
                <PersonAddAlt className="sidebarIcon" />
                Users{" "}
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Notifications </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback{" "}
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
