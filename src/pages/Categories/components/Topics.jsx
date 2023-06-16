import React from "react";
import { TfiAngleRight } from "react-icons/tfi";

const Topics = ({ setBlogEditorModal, index, topic }) => {
  return (
    <div className="border-b bg-white px-2 sml:px-4 py-4 flex items-center justify-between gap-2 flex-wrap">
      <div className="min-w-[250px]">
        <p className="font-semibold sml:text-lg text-gray-800">{topic?.topic}</p>
        <div className="flex gap-2 flex-wrap pt-2">
          {topic?.keywords?.map((keyword, i) => (
            <p
              key={i}
              keyword={keyword}
              i={i}
              className={`border ${
                (i + 1) % 3 == 1 &&
                `border-[#ffdd75] text-[#ffdd75] bg-[#fdf8e8]`
              }
            ${
              (i + 1) % 3 == 2 &&
              `border-[#5ad8b4] text-[#5ad8b4] bg-[#e5faf5]`
            }
            ${
              (i + 1) % 3 == 0 &&
              `border-[#f28d8c] text-[#f28d8c] bg-[#ffe7e6]`
            } rounded px-1 pb-1 text-sm font-semibold `}
            >
              {keyword}
            </p>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          setBlogEditorModal(true);
        }}
        className="flex items-center gap-1 text-white bg-[#fd5829] px-2 py-2 h-fit"
      >
        <span className={``}>Write</span>
        <TfiAngleRight className="w-4 h-4 " />
      </button>
    </div>
  );
};

export default Topics;
