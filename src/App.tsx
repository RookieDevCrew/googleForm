import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import FormListPage from './pages/FormListPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/formlist" element={<FormListPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
