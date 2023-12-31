import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/ProductSlice';
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/cartSlice';
import orderReducer from '../features/order/orderSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    // product is slice of store
    // productReducer is reducer function of slice
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,

  },
});

// reducer object is root reducer and it combines
//  all reducers from different slices

// with the store, we can access state and dispatch actions anywhere in the application
