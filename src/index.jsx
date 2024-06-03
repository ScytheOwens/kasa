import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/header.jsx';
import Footer from './components/Layout/footer.jsx';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Product from './pages/Product/product';
import Error from './components/Error';
import './App.scss';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/a-propos" element={<About/>}/>
            <Route path=":slug" element={<Product/>}/>
            <Route path="*" element={<Error />}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
