import styles from './CostItem.module.css';
import { useNavigate } from 'react-router-dom';

const CostItem = ({ cost, index, removeCost}) => {

  let navigate = useNavigate();
  let detailHandler = () => { navigate('/:costdetail') }


  let date = new Date (cost.time);
  let day = date.getDate();
  let month = date.getMonth() +1;
  let year = date.getFullYear();

  const removeHandler = i => {
    removeCost(i)
  }

  return (
		<div className={styles.costItem}>
			<div className={styles.id}>{cost.id}</div>
			<div className={styles.description}>{cost.description}</div>
			<div className={styles.price}> € {cost.price}</div>
			<div className={styles.date}>{day + '/' + month + '/' + year}</div>
			<button
				className={styles.removeItem}
				onClick={() => removeHandler(index)}
			>
				x
			</button>
			<button onClick={detailHandler}>details</button>
		</div>
	);
}

export default CostItem
