import { useState, useEffect } from 'react';
import styles from './Costs.module.css';
import CostForm from '../components/CostForm';

const Costs = () => {
  const [cost, setCost] = useState([]);
  return (
    <div>
      <CostForm cost={cost} setCost={setCost}/>
      { (cost.length > 0) ? cost[0].description : ''}
    </div>
  )
}

export default Costs
