import React from "react";
import { blogCard, blogProfile } from "../../assets/images";

import "./style.scss";

export const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="img-sec">
        <img src={blogCard} alt="img" />
      </div>
      <h2 className="heading">
        What to know before taking your business online?
      </h2>
      <div className="highlight">
        Web Development &nbsp;&nbsp; App Development
      </div>
      <p className="description">
        Hello Mighty Creator, I am sure you have a great idea about taking your
        business online. Maybe you don’t know where to start? But you need an
        online presence for your business to increase marketing and create a
        loyal customer base.A website consists of web pages which are easy to
        share and most browsers have a...
      </p>
      <div className="date-sec">
        <div>SEP 6, 2022</div>
        <div className="profile-img">
          <img src={blogProfile} alt="" />
        </div>
      </div>
    </div>
  );
};
