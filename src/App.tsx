import React from 'react';
import InputForm from './components/InputForm';
import Symbol from './components/Symbol';
import StockPrice from './components/StockPrice';
import Description from './components/Description';
import Loading from './components/Loading';
import api from './utils/Api';
import './App.css';

const App: React.FC = () => {
  const [inputSymbol, setInputSymbol] = React.useState<string>('');
  const [matchedSymbol, setMatchedSymbol] = React.useState<string>('');
  const [price, setPrice] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

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
      //start loading
      setLoading(true);

      //get price and set it
      const priceFromApi = await getPrice(inputSymbol);
      const priceUSD = `${priceFromApi} USD`;
      setPrice(priceUSD);

      //get description and set it
      const descriptionFromApi = await getDescription(inputSymbol);
      setDescription(descriptionFromApi);

      //set symbol that matches api
      setMatchedSymbol(inputSymbol);

      //stop loading
      setLoading(false);
    } catch (error) {
      //start loading
      setLoading(true);
      if (error.response.status === 404) {
        window.alert('not found this symbol');
      } else {
        window.alert('An error occured. Please try again.');
      }
      //stop loading
      setLoading(false);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputSymbol(e.target.value);
  };
  return (
    <>
      <Loading loadingState={loading} />
      <div className="app_container ">
        <br />
        <br />
        <InputForm onChangeFunc={handleInput} onSubmitFunc={handleSubmit} />
        <br />
        <br />

        <Symbol propsSymbol={matchedSymbol} />

        <StockPrice propsPrice={price} />

        <Description propsDescription={description} />
      </div>
    </>
  );
};

export default App;
