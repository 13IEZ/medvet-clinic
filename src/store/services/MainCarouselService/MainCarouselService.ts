import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { fireStore } from 'settings/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { IMainCarousel } from 'store/services/MainCarouselService/MainCarouselService.types';

export const mainCarouselApi = createApi({
  reducerPath: 'mainCarouselApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'medvet-3e10e-default-rtdb.firebaseio.com',
  }),
  endpoints: build => ({
    fetchCarouselData: build.query<IMainCarousel[], ''>({
      queryFn: async () => {
        const headersCollectionRef = collection(fireStore, 'main_carousel');
        const response = await getDocs(headersCollectionRef);
        const data = response.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        if (data.length) return { data: data as IMainCarousel[] };
        else
          return {
            error: {
              status: 'CUSTOM_ERROR',
              error: 'Упс, что-то пошло не так, мы не смогли загрузить данные :(',
            },
          };
      },
    }),
  }),
});
