import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { fireStore } from 'settings/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { IEmployeesCarousel } from 'store/services/Main/EmployeesCarouselService/EmployeesCarouselService.types';

export const employeesCarouselApi = createApi({
  reducerPath: 'employeesCarouselService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'medvet-3e10e-default-rtdb.firebaseio.com',
  }),
  endpoints: build => ({
    fetchEmployeesCarousel: build.query<IEmployeesCarousel[], ''>({
      queryFn: async () => {
        const employeesCarouselCollectionRef = collection(fireStore, 'mainEmployes');
        const response = await getDocs(employeesCarouselCollectionRef);
        const data = response.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        if (data.length) return { data: data as IEmployeesCarousel[] };
        else
          return {
            error: {
              status: 'CUSTOM_ERROR',
              error: 'Перезагрузите страницу, либо попробуйте позже',
            },
          };
      },
    }),
  }),
});
