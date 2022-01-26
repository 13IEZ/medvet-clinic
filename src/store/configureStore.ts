import {
  AnyAction,
  combineReducers,
  configureStore,
  EmptyObject,
  EnhancedStore,
  Middleware,
  MiddlewareArray,
} from '@reduxjs/toolkit';
import { headerApi } from 'store/services/HeaderService/HeaderService';
import { mainCarouselApi } from 'store/services/MainCarouselService/MainCarouselService';

const rootReducer = combineReducers({
  [headerApi.reducerPath]: headerApi.reducer,
  [mainCarouselApi.reducerPath]: mainCarouselApi.reducer,
});

export const setupStore: () => EnhancedStore<
  EmptyObject,
  AnyAction,
  MiddlewareArray<Middleware>
> = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(headerApi.middleware, mainCarouselApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
