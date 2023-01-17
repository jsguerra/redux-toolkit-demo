const configureStore = require("@reduxjs/toolkit").configureStore;
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
// const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");
const userReducer = require("../features/user/userSlice");

// Middleware
// const logger = reduxLogger.createLogger();

// Invoke the function and assign it to a constant
// takes an object as an argument and specify key called reducer
// in reducer we specify all the reducers from slices
// that belong to features
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // store adds middleware by default so we append our own
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
