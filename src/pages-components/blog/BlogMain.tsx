import React from "react";
import "./style.scss";

import { blogMain, blogProfile } from "../../assets/images";
import { BlogCard } from "./BlogCard";

export const BlogMain = () => {
  return (
    <>
      <div className="blog-main">
        <div className="blog-main-img">
          <img src={blogMain} alt="icon" />
        </div>
        <div className="blog-main-text">
          <h2>Hacking Humans is easier than hacking Computers</h2>
          <div>Cyber Security &nbsp;&nbsp;&nbsp;&nbsp; Ethical Hacking</div>
          <p>
            Being a hacker isn't as easy as it may sound. And you should beware
            of snake oil salesmen who guarantee you to make the next 'Kevin
            Mitnick' for a few bucks. Raiding area 51 would be a better plan,
            just in case. After jeopardizing NASA and the US Military, he was
            sentenced to prison for 70...
          </p>
          <div className="date-sec">
            <div>SEP 6, 2022</div>
            <div className="profile-img">
              <img src={blogProfile} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-box">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
};
