import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: "loader",
    initialState: {
        loading: false,
        message: "Idle state",
    },
    reducers: {
        startLoading: (state) => {
            state.loading = true;
            state.message = "🚀 Dispatching action and updating state...";
        },
        finishLoading: (state) => {
            state.loading = false;
            state.message = "✅ State updated successfully!";
        },
    },
});

export const { startLoading, finishLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
