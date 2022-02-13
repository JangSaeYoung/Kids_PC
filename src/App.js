import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Header from'./Header';
// import Main from './Main';
import Notice from './Notice';
import Blank from './Blank';
import LeftNavBar from './LeftNavBar';


function App() {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
         <Route path = '/' element={<LeftNavBar />}>
            <Route index element={<Blank />} />
            <Route path = '/started' element={<Blank />} />
            <Route path = '/홈' element={<Blank />} />
            <Route path = '/알림장' element={<Blank />} />
            <Route path = '/' element={<Notice />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
