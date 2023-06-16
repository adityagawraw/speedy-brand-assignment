import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      topic:
        "The Importance of Establishing a strong Online presence for Small Businesses",
      category: "custom",
      keywords: ["online presence", "small businesses", " branding"],
    },
    {
      topic:
        "The editor should allow users to select a tone and press the “Generate” button to write the blog.",
      category: "icp",
      keywords: ["online presence", "small businesses", " branding"],
    },
    {
      topic:
        "Feel free to add or ideate any cool features that you feel could be exciting for the editor or other parts of this assignment.",
      category: "custom",
      keywords: ["online presence", "small businesses", " branding"],
    },
    {
      topic:
        " A lot of components in the assignments are not designed.",
      category: "mission",
      keywords: ["online presence", "small businesses", " branding"],
    },
   
  ],
};

const topicSlice = createSlice({
  name: "topic",
  initialState: initialState,
  reducers: {
    addTopics: (state, action) => {
      state.blogs = [action.payload, ...state.blogs];
    },
  },
});

export const { addTopics } = topicSlice.actions;
export default topicSlice.reducer;
