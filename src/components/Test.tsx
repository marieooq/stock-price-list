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

interface List {
  list: Node;
}

const Test = () => {
  const [symbol, setSymbol] = useState<[]>([]);
  const accessToken = process.env.REACT_APP_ACCESSA_TOKEN;

  useEffect((): void => {
    const fetchAllSymbols = async () => {
      try {
        const res = await axios.get(
          `https://cloud.iexapis.com/stable/ref-data/symbols?token=${accessToken}`
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
