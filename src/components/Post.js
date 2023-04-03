import React from "react";
import heart_icon from "../images/heart_icon.png";
import rocket_icon from "../images/rocket_icon.jpg";
import more_icon from "../images/more_icon.svg";
export default function Post({ post }) {
  const { name, location, likes, description, date, image } = post;

  return (
    <>
      <div id="post-container">
        <section className="post-header">
          <span>
            <strong>{name}</strong>
          </span>
          <span className="post-location">{location}</span>
          <span className="post-action">
            <img src={more_icon} alt="more-icon" />
          </span>
        </section>

        <section className="post-image">
          <img
            src={`https://node-insta-clone-rest-api.onrender.com/${image}`}
            alt="Not available"
          />
        </section>

        <section className="post-footer">
          <div>
            <img src={heart_icon} alt="like-icon" className="icon" />
            <img src={rocket_icon} alt="share-icon" className="icon" />
            <span className="post-date">{date}</span>
          </div>
          <span>{likes} likes</span>
          <span className="post-desc">
            <strong>{description}</strong>
          </span>
        </section>
      </div>
    </>
  );
}
