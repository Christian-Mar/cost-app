import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Costs from './pages/Costs';
import CostDetail from './pages/CostDetail';
import './App.css';

function App() {
  
  const [totalCosts, setTotalCosts] = useState(0);

  return (
		<div className='App'>
      <Header totalCosts={totalCosts} />
			<Routes>
				<Route path='/' element={<Costs />} />
				<Route path='/:costdetail' element={<CostDetail />} />
			</Routes>
		</div>
	);
}

export default App;
