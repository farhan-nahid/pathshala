// import ordersReducer from '..feathers/ordersSlice';
import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../feathers/coursesSlice';

const store = configureStore({
  reducer: { courses: coursesReducer },
});

export default store;
