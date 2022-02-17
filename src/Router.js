import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from'./Header';
import Notice from './Notice';
import Blank from './Blank';
import LeftNavBar from './LeftNavBar';
import Main from './Main';


const Router = () =>  {
  return (
    <BrowserRouter>
      <Header />
      <LeftNavBar />
        <Routes>
        <Route path = '/' element={<Main />}> </Route>
            <Route path = '/main' element={<Main />} />
            <Route path = '/blank' element={<Blank />} />
            <Route path = '/notice' element={<Notice />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Router;