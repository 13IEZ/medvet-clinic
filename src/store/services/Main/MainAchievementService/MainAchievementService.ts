import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { fireStore } from 'settings/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { IAchievementData } from 'store/services/Main/MainAchievementService/MainAchievementService.types';

export const mainAchievementApi = createApi({
  reducerPath: 'mainAchievementApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'medvet-3e10e-default-rtdb.firebaseio.com',
  }),
  endpoints: build => ({
    fetchAchievementData: build.query<IAchievementData, ''>({
      queryFn: async () => {
        const mainAchievementCollectionRef = collection(fireStore, 'mainAchievement');
        const response = await getDocs(mainAchievementCollectionRef);
        const data = response.docs[0].data();
        if (data) return { data: data as IAchievementData };
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
