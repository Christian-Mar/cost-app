import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Costs from './pages/Costs';
import CostDetail from './pages/CostDetail';
import './App.css';

function App() {
  const [cost, setCost] = useState([]);

  return (
		<div className='App'>
      <Header />
			<Routes>
				<Route path='/' element={<Costs cost={cost} setCost={setCost}/>} />
				<Route path='/:costdetail' element={<CostDetail cost={cost} setCost={setCost}/>} />
			</Routes>
		</div>
	);
}

export default App;

/*
Opzetten van routes met 'Costs' als hoofdpagina en 'Costdetail' als dynamische route naar de details van iedere kost
*/ 
