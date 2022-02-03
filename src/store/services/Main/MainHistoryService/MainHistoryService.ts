import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { fireStore } from 'settings/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { IMainHistory } from 'store/services/Main/MainHistoryService/MainHistoryService.types';

export const mainHistoryApi = createApi({
  reducerPath: 'mainHistoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'medvet-3e10e-default-rtdb.firebaseio.com',
  }),
  endpoints: build => ({
    fetchHistoryData: build.query<IMainHistory, ''>({
      queryFn: async () => {
        const mainHistoryCollectionRef = collection(fireStore, 'mainCompaniesHistory');
        const response = await getDocs(mainHistoryCollectionRef);
        const data = response.docs[0].data();
        if (data) return { data: data as IMainHistory };
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
