import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./Contact";
import Blog from "./Blog";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from './components/layout/Footer';
import Admin from "./Admin";
import PageControl from './PageControl';


ReactDOM.render(
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<App helloMessage="this is a test message" />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/admin' element={
      <PageControl user={{username: 'admin', password: '123456' }}>
         <Admin />
    </PageControl>
    } />
  </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);


