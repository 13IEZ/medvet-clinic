import {
  AnyAction,
  combineReducers,
  configureStore,
  EmptyObject,
  EnhancedStore,
  MiddlewareArray,
} from '@reduxjs/toolkit';
import { headerApi } from 'services/HeaderService';

const rootReducer = combineReducers({
  [headerApi.reducerPath]: headerApi.reducer,
});

export const setupStore: () => EnhancedStore<EmptyObject, AnyAction, MiddlewareArray<any>> = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(headerApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
