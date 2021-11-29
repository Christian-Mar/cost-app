import { useRef } from 'react';
import uniqid from 'uniqid';
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
      "id": uniqid(),
      "description": description.current.value,
      "price": price.current.value, 
      "time": newD.getTime(),
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
					placeholder='Kost'
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

/* We brengen cost en setCost binnen als props. De bedoeling van de form is dat deze state aangemaakt wordt. Om 'cost' aan te maken halen we via useRef de data uit de inputvelden met een input submit en een onSubmut op de form. 
Hier wordt de cost gevormdd via setCost met de data uit de form en een unique id die automatisch aangemaakt wordt via een npm package (npm install unique id)
In de submit-functie (AddCost) zorgen we er voor dat alle velden weer leeggemaakt worden na de submit.  
*/