import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className={`ytb-item ${props.className}`}>
      <div className="ytb-img">
        <img src={props.image} alt="villa" />
      </div>
      <div className="ytb-footer">
        <img className="ytb-avatar" src={props.avatar} alt="avatar" />
        <div className="ytb-info">
          <h3 className="ytb-title">{props.title || "No Title"}</h3>
          <h4 className="ytb-author">{props.author || "No Author"}</h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
