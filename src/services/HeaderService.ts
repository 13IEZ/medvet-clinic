import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IHeader } from 'models/IHeader';
import { fireStore } from 'settings/firebase';
import { collection, getDocs } from '@firebase/firestore';

export const headerApi = createApi({
  reducerPath: 'headerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'medvet-3e10e-default-rtdb.firebaseio.com',
  }),
  endpoints: build => ({
    fetchHeaders: build.query<IHeader[], ''>({
      queryFn: async () => {
        const headersCollectionRef = collection(fireStore, 'headers');
        const response = await getDocs(headersCollectionRef);
        const data = response.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        if (data.length) return { data: data as IHeader[] };
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
