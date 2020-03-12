import React from 'react';
import SelectSection from './components/SelectSection';
import Symbol from './components/Symbol';
import StockPrice from './components/StockPrice';
import Description from './components/Description';
import api from './utils/Api';
import './App.css';

const App: React.FC = () => {
  const apiInstance = new api();
  const [synmbol, setSynmbol] = React.useState([]);
  React.useEffect(() => {
    const callApi = async () => {
      const description = await apiInstance.getAllSymbols();
      setSynmbol(description);
    };
    callApi();
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
