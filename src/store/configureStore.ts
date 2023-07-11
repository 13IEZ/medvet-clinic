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
import { mainCarouselApi } from 'store/services/Main/MainCarouselService/MainCarouselService';
import { listOfServicesApi } from 'store/services/Main/ListOfServices/ListOfServices';
import { mainHistoryApi } from 'store/services/Main/MainHistoryService/MainHistoryService';
import { employeesCarouselApi } from 'store/services/Main/EmployeesCarouselService/EmployeesCarouselService';
import { mainAchievementApi } from 'store/services/Main/MainAchievementService/MainAchievementService';
import { mainAdvantagesApi } from 'store/services/Main/MainAdvantagesService/MainAdvantagesService';
import { mainContactsApi } from 'store/services/Main/MainContactsService/MainContactsService';
import { footerApi } from 'store/services/FooterService/FooterService';
import { employeeApi } from 'store/services/Employee/EmployeeService';
import { promotionsApi } from 'store/services/PromotionsService/PromotionsService';
import notificationReducer from 'store/reducers/NotificationSlice';

const rootReducer = combineReducers({
  notificationReducer,
  [headerApi.reducerPath]: headerApi.reducer,
  [mainCarouselApi.reducerPath]: mainCarouselApi.reducer,
  [listOfServicesApi.reducerPath]: listOfServicesApi.reducer,
  [mainHistoryApi.reducerPath]: mainHistoryApi.reducer,
  [employeesCarouselApi.reducerPath]: employeesCarouselApi.reducer,
  [mainAchievementApi.reducerPath]: mainAchievementApi.reducer,
  [mainAdvantagesApi.reducerPath]: mainAdvantagesApi.reducer,
  [mainContactsApi.reducerPath]: mainContactsApi.reducer,
  [footerApi.reducerPath]: footerApi.reducer,
  [employeeApi.reducerPath]: employeeApi.reducer,
  [promotionsApi.reducerPath]: promotionsApi.reducer,
});

export const setupStore: () => EnhancedStore<
  EmptyObject,
  AnyAction,
  MiddlewareArray<Middleware>
> = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
        headerApi.middleware,
        mainCarouselApi.middleware,
        listOfServicesApi.middleware,
        mainHistoryApi.middleware,
        employeesCarouselApi.middleware,
        mainAchievementApi.middleware,
        mainAdvantagesApi.middleware,
        mainContactsApi.middleware,
        footerApi.middleware,
        employeeApi.middleware,
        promotionsApi.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
