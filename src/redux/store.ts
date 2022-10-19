import { configureStore } from "@reduxjs/toolkit";
import user from "./_reducer/user_reducer";
import project from "./_reducer/project_reducer";

export const store = configureStore({
  reducer: {
    user,
    project,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
