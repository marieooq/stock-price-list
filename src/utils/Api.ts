import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface ResponseElement {
  symbol: string;
  exchange: string;
  name: string;
  date: string;
  type: string;
  iexId: string;
  region: string;
  currency: string;
  isEnabled: boolean;
  figi: string;
  cik: string;
}

class Api {
  accessToken = process.env.REACT_APP_ACCESSA_TOKEN;

  getAllSymbols = async (): Promise<[]> => {
    console.log(this.accessToken);
    try {
      const { data } = await axios.get(
        `https://cloud.iexapis.com/stable/ref-data/symbols?token=${this.accessToken}`
      );
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }

    // const { data } = await axios.get(
    //   `https://cloud.iexapis.com/stable/ref-data/symbols?token=${this.accessToken}`
    // );

    // let symbolData: ResponseElement['symbol'][] = [];
    // for (const item of data) {
    //   Object.keys(item).forEach(val => {
    //     if (val === 'symbol') {
    //       symbolData.push(item[val]);
    //     }
    //   });
    // }

    // console.log('aaa');
    // console.log(symbolData);

    // return data;
  };

  // getSymbolsByThousand = async (): Promise<[]> => {
  //   const { data } = await axios.get(
  //     `https://cloud.iexapis.com/stable/ref-data/symbols?token=${this.accessToken}`
  //   );

  //   let symbolData: ResponseElement['symbol'][] = [];
  //   for (const item of data) {
  //     Object.keys(item).forEach(val => {
  //       if (val === 'symbol') {
  //         symbolData.push(item[val]);
  //       }
  //     });
  //   }

  //   console.log(symbolData);

  //   return data;
  // };

  getPrice = async (symbol: ResponseElement['symbol']): Promise<string> => {
    const lowerCaseSymbol = symbol.toLowerCase();

    const { data } = await axios.get(
      `https://cloud.iexapis.com/stable/stock/${lowerCaseSymbol}/quote/latestPrice?token=${this.accessToken}`
    );

    return data;
  };

  getCompanyDescription = async (
    symbol: ResponseElement['symbol']
  ): Promise<string> => {
    const lowerCaseSymbol = symbol.toLowerCase();

    const {
      data: { description }
    } = await axios.get(
      `https://cloud.iexapis.com/stable/stock/${lowerCaseSymbol}/company?token=${this.accessToken}`
    );
    return description;
  };
}

export default Api;
