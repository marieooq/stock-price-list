import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { any } from 'prop-types';

const Test = () => {
  const [data, setData] = useState<string>('');

  useEffect((): void => {
    axios
      .get(
        'https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_1f9b377e6b664b4684333c106015e21d'
      )
      .then((res: AxiosResponse) => {
        const getData = res.data;
        for (const item of getData) {
          console.log(item);
          //   setData(item);
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

  return <>{data}</>;
};

export default Test;
