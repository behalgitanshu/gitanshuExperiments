import React from 'react';
import './App.css';
import { createAnExcelSheetWithDummyData } from './Experiments/ExcelTest';
import { data_excelBasic } from './testData/excelBasic';
import { data_ExcelBig } from './testData/excelWith15000Cells';

function App() {
  return (
    <div className="App">
      <button className="Button" onClick={() => createAnExcelSheetWithDummyData(data_excelBasic)}>Test download as Excel</button>
      <button className="Button" onClick={() => createAnExcelSheetWithDummyData(data_ExcelBig)}>Test download as Excel - 15000 Cells * 200 Chars</button>
    </div>
  );
}

export default App;
