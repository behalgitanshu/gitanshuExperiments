import React from 'react';
import './App.css';
import { createAnExcelSheetWithDummyData } from './Experiments/ExcelTest';

function App() {
  return (
    <div className="App">
      <button onClick={() => createAnExcelSheetWithDummyData()}>Test download as excel - 15000 Cells * 200 Chars</button>
    </div>
  );
}

export default App;
