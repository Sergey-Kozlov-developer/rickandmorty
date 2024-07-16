import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: {
        status: "Alive",
        gender: "Male",
    },
    searchValue: "",
};

const filterSlice = createSlice({
    name: "filters",
    initialState,

    reducers: {
        setSort(state, action) {
            state.sort = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
    },
});

export const { setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
