import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        // use a proper `messages` key so selectors don’t return undefined
        messages: []
    },
    reducers:{
        addMesseges: (state, action)=>{
            state.messages.splice(OFFSET_LIVE_CHAT, 1)
            // push into the normalized `messages` array
            state.messages.unshift(action.payload)
        }
    }
})

export const { addMesseges } = chatSlice.actions;
export default chatSlice.reducer;