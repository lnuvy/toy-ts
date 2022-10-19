import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import user from "./modules/user";
import project from "./modules/project";

export const store = configureStore({
  reducer: {
    user,
    project,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
