import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
import { setToken as setTokenUtils, getToken, removeToken } from "@/utils";
import { loginApi, getUserInfoApi } from "@/apis/user";
const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "",
    userInfo: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      //localStorage
      // localStorage.setItem("token", action.payload);
      setTokenUtils(action.payload);
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    clearUserInfo: (state) => {
      state.userInfo = {};
      state.token = "";
      removeToken();
    },
  },
});

const { setToken, setUserInfo, clearUserInfo } = userStore.actions;

//获取reducer函数
const userReducer = userStore.reducer;

//异步action

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await loginApi(loginForm);
    dispatch(setToken(res.data.token));
  };
};

//获取用户信息
const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await getUserInfoApi();
    dispatch(setUserInfo(res.data));
  };
};

export { setToken, fetchLogin, fetchUserInfo, clearUserInfo };

export default userReducer;
