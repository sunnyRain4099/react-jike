import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
const userStore = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token") || "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      //localStorage
      localStorage.setItem("token", action.payload);
    },
  },
});

const { setToken } = userStore.actions;

//获取reducer函数
const userReducer = userStore.reducer;

//异步action

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post("/authorizations", loginForm);
    dispatch(setToken(res.data.token));
  };
};

export { setToken, fetchLogin };

export default userReducer;
