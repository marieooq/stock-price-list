import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { any } from 'prop-types';

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

interface List {
  list: Node;
}

const Test = () => {
  const [symbol, setSymbol] = useState<[]>([]);

  useEffect((): void => {
    const fetchAllSymbols = async () => {
      try {
        const res = await axios.get(
          'https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_1f9b377e6b664b4684333c106015e21d'
        );
        const items = res.data;
        const symbols = items.map((val: RsponseElement) => {
          return val.symbol;
        });
        console.log(symbols);
        setSymbol(symbols);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllSymbols();
  }, []);

  const symbolList = symbol.map(val => {
    return <li>{val}</li>;
  });

  return <ul>{symbolList}</ul>;
};

export default Test;
