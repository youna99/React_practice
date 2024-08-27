import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: {
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    age: "",
    gender: "",
    address: "",
  },
  isAuthenticated: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserField: (state, action) => {
      const { field, value } = action.payload;
      state.currentUser[field] = value;
    },

    registerUser: (state) => {
      const exists = state.users.find(
        (user) => user.email === state.currentUser.email
      );
      if (!exists) {
        state.users.push({ ...state.currentUser });
        state.currentUser = {
          email: "",
          password: "",
          confirmPassword: "",
          nickname: "",
          age: "",
          gender: "",
          address: "",
        };
        state.error = null;
      } else {
        state.error = "Email already exists";
      }
    },

    loginUser: (state, action) => {
      const user = state.users.find(
        (user) =>
          user.email === action.payload.identifier &&
          user.password === action.payload.password
      );
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.isAuthenticated = false;
        state.error = "Invalid email or password";
      }
    },

    logout: (state) => {
      state.currentUser = {
        email: "",
        password: "",
        confirmPassword: "",
        nickname: "",
        age: "",
        gender: "",
        address: "",
      };
      state.isAuthenticated = false;
    },
  },
});

export const { setUserField, registerUser, loginUser, logout } =
  userSlice.actions;
export default userSlice.reducer;
