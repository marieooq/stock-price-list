import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { string } from 'prop-types';

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

  getPrice = async (symbol: ResponseElement['symbol']): Promise<string> => {
    // sconsole.log('here');
    const lowerCaseSymbol = symbol.toLowerCase();
    console.log(lowerCaseSymbol);

    const { data } = await axios.get(
      `https://cloud.iexapis.com/stable/stock/${lowerCaseSymbol}/quote/latestPrice?token=${this.accessToken}`
    );
    console.log(data);

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

interface Props {
  handleFunc: (e: any) => void;
}
