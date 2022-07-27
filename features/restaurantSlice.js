import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  restaurant: {
    id: null,
    title: null,
    imgUrl: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    long: null,
    lat: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;
export const selectRestautant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
