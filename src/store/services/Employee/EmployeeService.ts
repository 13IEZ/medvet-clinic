import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { doc, getDoc, getFirestore } from '@firebase/firestore';
import { IEmployeesCarousel } from 'store/services/Main/EmployeesCarouselService/EmployeesCarouselService.types';

export const employeeApi = createApi({
  reducerPath: 'employeesService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'medvet-3e10e-default-rtdb.firebaseio.com',
  }),
  endpoints: build => ({
    fetchEmployee: build.query<IEmployeesCarousel, string>({
      queryFn: async id => {
        const db = getFirestore();
        const docRef = doc(db, 'mainEmployes', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.data()) return { data: docSnap.data() as IEmployeesCarousel };
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
