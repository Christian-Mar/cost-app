import { useState } from 'react';
//import styles from './Costs.module.css';
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
/*
Costs is de main page met twee componenten: 
1. de form
2. de lijst met aangemaakte kosten

Hier geven we de state mee van de cost die doorgegeven wordt via props naar de componenten
*/