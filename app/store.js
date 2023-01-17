const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");

// Invoke the function and assign it to a constant
// takes an object as an argument and specify key called reducer
// in reducer we specify all the reducers from slices
// that belong to features
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
});

module.exports = store;
