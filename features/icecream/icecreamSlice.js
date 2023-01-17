const createSlice = require("@reduxjs/toolkit").createSlice;
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
  numOfIceCreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  // extra reducers when you want to access actions in other slices
  // extraReducers: {
  //   ['cake/ordered']: (state) => {
  //     state.numOfIceCreams--
  //   }
  // }
  // Although the above works the recommended approach
  // is to use a build function
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
