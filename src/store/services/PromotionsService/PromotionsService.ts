import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPromotions } from 'store/services/PromotionsService/PromotionsService.type';
import { fireStore } from 'settings/firebase';
import { collection, getDocs } from '@firebase/firestore';

export const promotionsApi = createApi({
  reducerPath: 'promotionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'medvet-3e10e-default-rtdb.firebaseio.com',
  }),
  endpoints: build => ({
    fetchPromotions: build.query<IPromotions[], ''>({
      queryFn: async () => {
        const promotionsCollectionRef = collection(fireStore, 'promotions');
        const response = await getDocs(promotionsCollectionRef);
        const data = response.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        if (data.length) return { data: data as IPromotions[] };
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
