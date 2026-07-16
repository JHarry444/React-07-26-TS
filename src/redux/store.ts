import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
import trainerReducer from "./trainers";

const myStore = configureStore({
    reducer: {
        theme: themeReducer,
        trainers: trainerReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof myStore.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof myStore.dispatch;

// Ripped straight from the React Redux docs: https://react-redux.js.org/using-react-redux/usage-with-typescript

export default myStore;