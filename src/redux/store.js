import filter from "@/redux/filter/sliceFilter";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: { filter },
});
