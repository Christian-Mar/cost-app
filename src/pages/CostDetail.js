import { useParams, Link } from 'react-router-dom';
//import styles from './CostDetail.module.css';

const Costdetail = ({cost}) => {
    const {costdetail} = useParams();
    // dit geeft de url-waarde weer
    const item = cost.find(
      (item) => item.id === costdetail
    );
    console.log(item);
  return (
    <div>
      <p>hello {costdetail} </p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <input></input>
      <Link to='/'>Terug naar kostenoverzicht</Link>
    </div>
  )
}

export default Costdetail;
