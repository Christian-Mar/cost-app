import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Costs from './pages/Costs';
import CostDetail from './pages/CostDetail';
import './App.css';

function App() {
  const [cost, setCost] = useState([]);
  const [totalCosts, setTotalCosts] = useState(0);

  return (
		<div className='App'>
      <Header totalCosts={totalCosts} />
      <h1>Welkom bij deze Cost App</h1>
			<Routes>
				<Route path='/costs' element={<Costs />} />
				<Route path='/costdetail' element={<CostDetail />} />
			</Routes>
		</div>
	);
}

export default App;
