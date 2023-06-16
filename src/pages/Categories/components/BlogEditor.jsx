import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const BlogEditor = ({blogEditorModal, setBlogEditorModal}) => {
    if(!blogEditorModal) return null; 
  return (
    <div className="bg-[#00000010] absolute top-0 left-0 z-10 w-full h-[100vh] flex justify-center items-center">
      <div className="sml:min-w-[400px] bg-white rounded px-3 py-3 border  border-gray-700">
      <div className="flex justify-end">
          <button onClick={() => setBlogEditorModal(false)}>
            {" "}
            <AiOutlineClose />
          </button>
        </div>
      BlogEditor
      </div>
     
    </div>
  );
};

export default BlogEditor;
