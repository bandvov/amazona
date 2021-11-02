const { createSlice } = require("@reduxjs/toolkit");

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || {},
    loading: false,
    errorMessage: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserLoading: (state, action) => {
      state.loading = action.payload;
    },

    setUserErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setUser, setUserLoading, setUserErrorMessage } =
  userSlice.actions;
export default userSlice.reducer;
