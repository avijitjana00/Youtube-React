import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers:  {
        cacheSearchResults: (state, action)=>{
            // RTK allows us to mutate the draft state directly. Reassigning the
            // `state` variable doesn't update the store, so we need to either
            // mutate the state or return a new object. Here we merge the
            // incoming results into the existing state object.
            Object.assign(state, action.payload);
            // alternatively: return { ...state, ...action.payload };
        }
    }
})

export const {cacheSearchResults} = searchSlice.actions;
export default searchSlice.reducer;