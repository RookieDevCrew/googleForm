import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import FormListPage from './pages/FormListPage';
import FormPage from './pages/Formpage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/formlist" element={<FormListPage/>}/>
        <Route path="/form" element={<FormPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
