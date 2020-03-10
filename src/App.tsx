import React from 'react';
import SelectSection from './components/SelectSection';
import Symbol from './components/Symbol';
import StockPrice from './components/StockPrice';
import Description from './components/Description';
import './App.css';

const App: React.FC = () => {
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
