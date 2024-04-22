import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    userid: null,
    username: null,
  },
  reducers: {
    userLogin: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.username = action.payload.buyername;
    },
    userLogout: (state) => {
      state.user = null;
      state.token = "";
      state.username = null;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
