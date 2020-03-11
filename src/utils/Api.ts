import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface RsponseElement {
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

  getAllSymbols = async () => {
    try {
      const res = await axios.get(
        `https://cloud.iexapis.com/stable/ref-data/symbols?token=${this.accessToken}`
      );
      const items = res.data;
      console.log(items);
      const symbols = items.map((val: RsponseElement) => {
        return val.symbol;
      });
      return symbols;
    } catch (error) {
      console.log(error);
    }
  };

  getPrice = async (symbol: RsponseElement['symbol']) => {
    const lowerCaseSymbol = symbol.toLowerCase();

    try {
      const res = await axios.get(
        `https://cloud.iexapis.com/stable/stock/${lowerCaseSymbol}/quote/latestPrice?token=${this.accessToken}`
      );
      const currentPrice = res.data;
      console.log(currentPrice);
      return currentPrice;
    } catch (error) {
      console.log(error);
    }
  };
}

export default Api;
