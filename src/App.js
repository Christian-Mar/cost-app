import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Costs from './pages/Costs';
import CostDetail from './pages/CostDetail';
import './App.css';

function App() {
  

  return (
		<div className='App'>
      <Header />
			<Routes>
				<Route path='/' element={<Costs />} />
				<Route path='/:costdetail' element={<CostDetail />} />
			</Routes>
		</div>
	);
}

export default App;

/*
Opzetten van routes met 'Costs' als hoofdpagina en 'Costdetail' als dynamische route naar de details van iedere kost
*/ 
