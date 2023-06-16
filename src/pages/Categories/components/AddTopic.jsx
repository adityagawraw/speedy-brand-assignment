import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addTopics } from "../../../features/topics-Slice";
import { toast } from "react-toastify";

const categories = ["custom", "icp", "mission", "product"];
const AddTopic = ({ addTopicModal, setAddTopicModal }) => {
  const [topicData, setTopicData] = useState({
    topic: "",
    category: "",
    keywords: [],
  });

  const [keyword, setKeyword] = useState("");

  const dispatch = useDispatch();
  

  const handleAddTopics = () => {
    if(topicData.topic==""){
      toast.warning("Please fill the topic.");
      return;
    }
    if(topicData.keywords.length==0){
      toast.warning("Please add atleast one keyword.");
      return;
    }
    dispatch(addTopics(topicData));
    setTopicData({
      topic: "",
      category: "",
      keywords: [],
    });
    setAddTopicModal(false);
    toast.success("Your topics is added successfully.")
  };

  if (!addTopicModal) return null;
  return (
    <div className="bg-[#00000010] absolute top-0 left-0 z-10 w-full h-[100vh] flex justify-center items-center">
      <div className=" sml:min-w-[400px] bg-white rounded px-3 py-3 border  border-gray-700">
        <div className="flex justify-end">
          <button onClick={() => setAddTopicModal(false)}>
            {" "}
            <AiOutlineClose />
          </button>
        </div>
        <p className="text-lg font-semibold text-gray-700">Topic Name</p>
        <input
        placeholder="Enter the topic name"
          onChange={(e) =>
            setTopicData((prev) => {
              return { ...prev, topic: e.target.value };
            })
          }
          type="text"
          className="w-full my-2 border border-gray-500 px-2 py-1 rounded outline-none"
        />
        <p className="text-lg font-semibold text-gray-700">Category</p>
        <select
        placeholder="Select category"
        defaultValue={0}
          onChange={(e) => {
            setTopicData((prev) => {
              return { ...prev, category: categories[e.target.value] };
            });
          }}
          type="text"
          className="w-full my-2 text-gray-700 bg-white border border-gray-500 px-2 py-1 rounded outline-none"
        >
          {categories.map((element, index) => (
            <option value={index}>{element}</option>
          ))}
        </select>

        <p className="text-lg font-semibold text-gray-700">Keywords</p>
        <div className="border border-gray-500 px-2 my-2 rounded">
          <div className="flex gap-3 items-center">
            <input
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              type="text"
              className="w-full my-2 px-2 outline-none"
              placeholder="Enter the keywords"
            />
            <button
              onClick={() => {
                if (keyword == "") return;

                setTopicData((prev) => {
                  let arr = [...prev.keywords, keyword];
                  return { ...prev, keywords: arr };
                });
                setKeyword("");
              }}
              className="text-white bg-[#fd5829] font-semibold px-2 rounded"
            >
              Add
            </button>
          </div>
          <div className="flex gap-2 flex-wrap mb-1">
            {topicData.keywords?.map((element, index) => (
              <p
                key={index}
                index={index}
                className={`items-center flex gap-2 border ${
                  (index + 1) % 3 == 1 &&
                  `border-[#ffdd75] text-[#ffdd75] bg-[#fdf8e8]`
                }
                ${
                  (index + 1) % 3 == 2 &&
                  `border-[#5ad8b4] text-[#5ad8b4] bg-[#e5faf5]`
                }
                ${
                  (index + 1) % 3 == 0 &&
                  `border-[#f28d8c] text-[#f28d8c] bg-[#ffe7e6]`
                }  rounded px-1 text-sm font-semibold  w-fit`}
              >
                {element}
                <button
                  onClick={() =>
                    setTopicData((prev) => {
                      let arr = prev.keywords?.filter((e, i) => i != index);
                      return { ...prev, keywords: arr };
                    })
                  }
                >
                  <GrFormClose className="text-white" />
                </button>
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-center ">
          <button
            onClick={() => handleAddTopics()}
            className="text-white bg-[#fd5829] px-2 pb-1 font-semibold rounded"
          >
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTopic;

const keywordColor = [
  { border: "#ffdd75", bg: "#fdf8e8" },
  { border: "#5ad8b4", bg: "#e5faf5" },
  { border: "#f28d8c", bg: "#ffe7e6" },
];
