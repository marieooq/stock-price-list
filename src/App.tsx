import React from 'react';
import SelectSection from './components/SelectSection';
import Symbol from './components/Symbol';
import StockPrice from './components/StockPrice';
import Description from './components/Description';
import api from './utils/Api';
import './App.css';

const App: React.FC = () => {
  const apiInstance = new api();
  const [symbols, setSynmbol] = React.useState<string[]>([]);
  React.useEffect(() => {
    const callApi = async () => {
      const symbolData: string[] = await apiInstance.getAllSymbols();
      setSynmbol(symbolData);
    };
    callApi();
    console.log(symbols);
  }, []);
  return (
    <>
      <div className="app_container">
        <SelectSection />
        <Symbol />
        <StockPrice />
        <Description />
      </div>
    </>
  );
};

export default App;
