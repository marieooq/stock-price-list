import React from 'react';
import SelectSection from './components/SelectSection';
import Symbol from './components/Symbol';
import StockPrice from './components/StockPrice';
import Description from './components/Description';
import Test from './components/Test';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <div className="app_container">
        <SelectSection />
        <Symbol />
        <StockPrice />
        <Description />
        <Test />
      </div>
    </>
  );
};

export default App;
