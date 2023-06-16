import React, { useEffect, useState } from "react";
import Topics from "./Topics";
import { useSelector } from "react-redux";

const TopicsList = ({ setBlogEditorModal, categories }) => {
  const { blogs } = useSelector((state) => state.topics);
  const [topics, setTopics] = useState([]);

  const handleCategoryChange = () => {
    setTopics((prev) => {
      let arr = blogs?.filter((element) => {
        if (element.category == categories) {
          return element;
        }
      });
      return arr;
    });
  };

  useEffect(() => {
    handleCategoryChange();
  }, [categories]);

  useEffect(() => {
    console.log(topics);
  }, [topics]);

  return (
    <div className="border  bg-[#f9fbfc] my-5">
      <p className="px-2 sml:px-4 border-b py-2 font-semibold">
        Recommended Topics
      </p>
      {categories == "all"
        ? blogs?.map((topic, index) => (
            <Topics
              key={index}
              index={index}
              topic={topic}
              setBlogEditorModal={setBlogEditorModal}
            />
          ))
        :topics.length==0?<p className="bg-white text-gray-800 font-semibold text-xl py-3 px-1 sml:px-4 text-center">Sorry! There are no blogs in this Category</p> : topics?.map((topic, index) => (
            <Topics
              key={index}
              index={index}
              topic={topic}
              setBlogEditorModal={setBlogEditorModal}
            />
          ))}
    </div>
  );
};

export default TopicsList;
