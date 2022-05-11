import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi, filterReducer } from 'redux/contactsSlice';

export const store = configureStore({
  reducer: {  
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),    
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);