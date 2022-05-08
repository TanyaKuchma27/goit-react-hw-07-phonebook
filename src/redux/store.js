// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from '../redux/contactsSlice';

export const store = configureStore({
  reducer: {  
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),    
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);