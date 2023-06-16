import React, { useState } from "react";
import { TfiAngleRight } from "react-icons/tfi";
import classes from './Category.module.css';
import Topics from "./components/Topics";
import TopicsList from "./components/TopicsList";
import AddTopic from "./components/AddTopic";
import BlogEditor from "./components/BlogEditor";

const Categories = () => {
  const [categories, setCategories] = useState("all");
  const [addTopicModal, setAddTopicModal]= useState(false);
  const [blogEditorModal, setBlogEditorModal]= useState(false);

  const handleCategory = (category) => {
    setCategories(category);
  };

  return (
    <div className="px-2 sml:px-6 pt-7 pb-4 relative">
      <section>
        <h1 className="text-xl font-bold text-gray-800">Categories</h1>
        <div className="flex items-center justify-between mt-8 flex-wrap gap-y-3">
          <div className="flex items-center justify-around gap-2 w-full sml:w-fit">
            <button
              onClick={() => handleCategory("all")}
              className={`font-semibold ${classes.category} text-center py-1 ${
                categories == "all"
                  ? `text-[#fd5829] border-b-[5px] border-[#fd5829]`
                  : `text-gray-800`
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleCategory("custom")}
              className={`font-semibold ${classes.category} text-center py-1 ${
                categories == "custom"
                  ? `text-[#fd5829] border-b-[5px] border-[#fd5829]`
                  : `text-gray-800`
              }`}
            >
              Custom
            </button>
            <button
              onClick={() => handleCategory("icp")}
              className={`font-semibold ${classes.category} text-center py-1 ${
                categories == "icp"
                  ? `text-[#fd5829] border-b-[5px] border-[#fd5829]`
                  : `text-gray-800`
              }`}
            >
              ICP
            </button>
            <button
              onClick={() => handleCategory("mission")}
              className={`font-semibold ${classes.category} text-center py-1 ${
                categories == "mission"
                  ? `text-[#fd5829] border-b-[5px] border-[#fd5829]`
                  : `text-gray-800`
              }`}
            >
              Mission
            </button>
            <button
              onClick={() => handleCategory("product")}
              className={`font-semibold ${classes.category} text-center py-1 ${
                categories == "product"
                  ? `text-[#fd5829] border-b-[5px] border-[#fd5829]`
                  : `text-gray-800`
              }`}
            >
              Product
            </button>
          </div>
          <button
          onClick={()=>setAddTopicModal(prev=>!prev)}
          className="flex items-center gap-1 place-self-center text-white bg-[#fd5829] px-2 py-2 h-fit">
            <span className={``}>Add Topics</span>
            <TfiAngleRight className="w-4 h-4 " />
          </button>
        </div>
      </section>
      <TopicsList categories={categories} setBlogEditorModal={setBlogEditorModal}/>
      <AddTopic addTopicModal={addTopicModal} setAddTopicModal={setAddTopicModal}/>
      < BlogEditor blogEditorModal={blogEditorModal} setBlogEditorModal={setBlogEditorModal}/>
    </div>
  );
};

export default Categories;
