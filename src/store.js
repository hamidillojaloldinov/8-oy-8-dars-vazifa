import { configureStore } from "@reduxjs/toolkit";
import UserReduser from "./app/userslice";


export const store =configureStore({
    reducer:{
        user:UserReduser
    }
})