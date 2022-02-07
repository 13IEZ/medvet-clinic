import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { fireStore } from 'settings/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { IMainContacts } from 'store/services/Main/MainContactsService/MainContactsService.types';

export const mainContactsApi = createApi({
  reducerPath: 'mainContactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'medvet-3e10e-default-rtdb.firebaseio.com',
  }),
  endpoints: build => ({
    fetchContactsData: build.query<IMainContacts, ''>({
      queryFn: async () => {
        const mainContactsCollectionRef = collection(fireStore, 'mainContacts');
        const response = await getDocs(mainContactsCollectionRef);
        const data = response.docs[0].data();
        if (data) return { data: data as IMainContacts };
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
