import { useRef } from 'react';
import styles from './CostForm.module.css';


const CostForm = ({ cost, setCost }) => {
  const description = useRef(null);
  const price = useRef(null);
  const time = useRef(null);

  const AddCost = e => {
    e.preventDefault();
    
    let d = time.current.value.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);

    setCost([...cost, {
      "description": description.current.value,
      "price": price.current.value, 
      "time": newD.getTime()
    }]);
    description.current.value="";
    price.current.value=null;
    time.current.value=null;
  }

	return (
		<form className={styles.costForm} onSubmit={AddCost}>
			<div className={styles.inputContainer}>
				<input
					type='text'
					name='costName'
					id='costName'
					placeholder='Kledij'
					className={styles.costName}
          ref={description}
				/>
				<input
					type='number'
					name='amount'
					id='amount'
					placeholder='50'
					className={styles.amount}
          ref={price}
				/>
				<input type='date' name='date' id='date' className={styles.date} ref={time}/>
				<input type='submit' value='Voeg toe' className={styles.confirm} />
			</div>
		</form>
	);
};

export default CostForm;
