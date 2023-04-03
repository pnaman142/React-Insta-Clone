import React from "react";
import circle_icon from "../images/circle_icon.svg";
import camera_icon from "../images/camera_icon.png";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Postview() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <header>
          <nav id="nav">
            <div className="nav-image-1" onClick={() => navigate("all")}>
              <img src={circle_icon} alt="logo" />
              <span className="instaclone">Instaclone</span>
            </div>
            <div className="nav-image-2">
              <Link to="/posts/new">
                <img src={camera_icon} alt="camera" />
              </Link>
            </div>
          </nav>
        </header>
        <div id="posts">
          <Outlet />
        </div>
      </div>
    </>
  );
}
