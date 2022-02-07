import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { fireStore } from 'settings/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { IFooterService } from 'store/services/FooterService/FooterService.types';

export const footerApi = createApi({
  reducerPath: 'footerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'medvet-3e10e-default-rtdb.firebaseio.com',
  }),
  endpoints: build => ({
    fetchFooters: build.query<IFooterService, ''>({
      queryFn: async () => {
        const footersCollectionRef = collection(fireStore, 'footers');
        const response = await getDocs(footersCollectionRef);
        const data = response.docs[0].data();
        if (data) return { data: data as IFooterService };
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
