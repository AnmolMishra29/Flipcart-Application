import './App.css';
import { Box } from '@mui/material';
//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailVeiw from './components/details/DetailVeiw';
import Cart from './components/cart/Cart';

import DataProvider from './context/DataProvider';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
          <Header/>
          <Box style={{margin: 54}}>
            <Routes>
                <Route path='/' element= {<Home/>} />
                <Route path='/product/:id' element ={<DetailVeiw/>} />
                <Route path='/cart' element ={<Cart/>} />
            </Routes>
          </Box>
      </BrowserRouter>  
    </DataProvider>
    
  );
}

export default App;
