import { useState, useEffect } from 'react';
import styles from './Costs.module.css';
import CostForm from '../components/CostForm';
import CostList from '../components/CostList';

const Costs = () => {
    const [cost, setCost] = useState([]);
  return (
		<div>
			<CostForm cost={cost} setCost={setCost} />
			<CostList cost={cost} setCost={setCost} />
		</div>
	);
}

export default Costs
//{cost.length > 0 ? cost[0].description : ''}