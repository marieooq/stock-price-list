import React from 'react';
import InputForm from './components/InputForm';
import Symbol from './components/Symbol';
import StockPrice from './components/StockPrice';
import Description from './components/Description';
import api from './utils/Api';
import './App.css';

const App: React.FC = () => {
  const [inputSymbol, setInputSymbol] = React.useState<string>('');
  const [matchedSymbol, setMatchedSymbol] = React.useState<string>('');
  const [price, setPrice] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');

  const apiInstance = new api();

  const getPrice = async (symbol: string): Promise<string> => {
    const priceFromApi: string = await apiInstance.getPrice(symbol);
    return priceFromApi;
  };

  const getDescription = async (symbol: string): Promise<string> => {
    const descriptionFromApi: string = await apiInstance.getCompanyDescription(
      symbol
    );
    return descriptionFromApi;
  };

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    try {
      //get price and set it
      const priceFromApi = await getPrice(inputSymbol);
      setPrice(priceFromApi);

      //get description and set it
      const descriptionFromApi = await getDescription(inputSymbol);
      setDescription(descriptionFromApi);

      //set symbol that matches api
      setMatchedSymbol(inputSymbol);
    } catch (error) {
      if (error.response.status === 404) {
        window.alert('not found this symbol');
      } else {
        window.alert('An error occured. Please try again.');
      }
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('here');
    console.log(e.target.value);
    setInputSymbol(e.target.value);
  };
  return (
    <>
      <div className="app_container">
        <InputForm onChangeFunc={handleInput} onSubmitFunc={handleSubmit} />
        <Symbol propsSymbol={matchedSymbol} />
        <StockPrice propsPrice={price} />
        <Description propsDescription={description} />
      </div>
    </>
  );
};

export default App;
