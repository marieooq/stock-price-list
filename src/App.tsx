import React from 'react';
import SelectSection from './components/SelectSection';
import Symbol from './components/Symbol';
import StockPrice from './components/StockPrice';
import Description from './components/Description';
import api from './utils/Api';
import './App.css';

const App: React.FC = () => {
  const [inputSymbol, setInputSymbol] = React.useState<string>('');
  const [price, setPrice] = React.useState<string>('');
  // const [symbols, setSynmbol] = React.useState<string[]>([]);
  const apiInstance = new api();

  const getPrice = async (symbol: string) => {
    const priceFromApi: string = await apiInstance.getPrice(symbol);
    setPrice(priceFromApi);
  };

  // React.useEffect(() => {
  //   const getPrice = async () => {
  //     const priceFromApi: string = await apiInstance.getPrice(inputSymbol);
  //     setPrice(priceFromApi);
  //   };
  //   getPrice();
  // }, []);

  const handleInput = (e: any): void => {
    console.log(e.target.value);
    setInputSymbol(e.target.value);
  };
  return (
    <>
      <div className="app_container">
        <SelectSection handleFunc={handleInput} />
        <Symbol />
        <StockPrice propsPrice={price} />
        <Description />
      </div>
    </>
  );
};

export default App;
