import { configureStore } from "@reduxjs/toolkit";
import Slice from "../Slice/Slice";

const Store = configureStore({
   reducer: {
      Student: Slice.reducer
   }
})

export default Store;