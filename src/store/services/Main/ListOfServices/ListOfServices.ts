import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { fireStore } from 'settings/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { IListOfServices } from 'store/services/Main/ListOfServices/ListOfServices.types';

export const listOfServicesApi = createApi({
  reducerPath: 'listOfServicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'medvet-3e10e-default-rtdb.firebaseio.com',
  }),
  endpoints: build => ({
    fetchListOfServices: build.query<IListOfServices[], ''>({
      queryFn: async () => {
        const listOfServicesCollectionRef = collection(fireStore, 'services');
        const response = await getDocs(listOfServicesCollectionRef);
        const data = response.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        if (data.length) return { data: data as IListOfServices[] };
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
