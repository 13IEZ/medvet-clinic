import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { fireStore } from 'settings/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { IMainAdvantages } from 'store/services/Main/MainAdvantagesService/MainAdvantagesService.types';

export const mainAdvantagesApi = createApi({
  reducerPath: 'mainAdvantagesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'medvet-3e10e-default-rtdb.firebaseio.com',
  }),
  endpoints: build => ({
    fetchMainAdvantages: build.query<IMainAdvantages[], ''>({
      queryFn: async () => {
        const mainAdvantagesCollectionRef = collection(fireStore, 'mainAdvantages');
        const response = await getDocs(mainAdvantagesCollectionRef);
        const data = response.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        if (data.length) return { data: data as IMainAdvantages[] };
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
