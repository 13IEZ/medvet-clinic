import React, { FC } from 'react';
import { headerApi } from 'services/HeaderService';

const Main: FC = () => {
  const { data: headers, error: cat } = headerApi.useFetchHeadersQuery('');
  console.log(headers);
  console.log(cat);

  return (
    <div>
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
    </div>
  );
};

export default Main;
