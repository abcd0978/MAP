import { configureStore } from '@reduxjs/toolkit';
import places from '../moduless/places';
import tourPlacesReducer from '../modules/tourPlaces';
const store = configureStore({
  reducer: { places: places, tourPlacesReducer },
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
