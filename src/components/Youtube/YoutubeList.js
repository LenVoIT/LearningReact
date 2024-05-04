import React from "react";
import { ytbData } from "../../YoutubeData";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);
  return (
    <div className="ytb-list">
      {props.children}
      {ytbData.map((item, index) => {
        // cách 2
        let newClassName = "";
        if (index === 0) {
          newClassName = "abcxyz";
        }
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            author={item.author}
            avatar={item.avatar || item.image}
            title={item.title}
            // className= {index === 0 ? "abcxyz" : ""}  cách 1
            // cách 2
            className={newClassName}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
