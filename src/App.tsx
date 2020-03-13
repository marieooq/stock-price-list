import React from 'react';
import InputForm from './components/InputForm';
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

  const getPrice = async (symbol: string): Promise<string> => {
    const priceFromApi: string = await apiInstance.getPrice(symbol);
    return priceFromApi;
  };

  // React.useEffect(() => {
  //   const getPrice = async () => {
  //     const priceFromApi: string = await apiInstance.getPrice(inputSymbol);
  //     setPrice(priceFromApi);
  //   };
  //   getPrice();
  // }, []);

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    try {
      const priceFromApi = await getPrice(inputSymbol);
      setPrice(priceFromApi);

      // Symbol
      // Description
    } catch (err) {
      if (err.response.status === 404) {
        window.alert('not found this symbol');
      } else {
        window.alert('An error occured. Please try again.');
      }
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    setInputSymbol(e.target.value);
  };
  return (
    <>
      <div className="app_container">
        <InputForm onChangeFunc={handleInput} onSubmitFunc={handleSubmit} />
        <Symbol />
        <StockPrice propsPrice={price} />
        <Description />
      </div>
    </>
  );
};

export default App;
