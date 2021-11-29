import styles from './CostList.module.css';
import CostItem from './CostItem';

const CostList = ({cost, setCost}) => {
  const removeCost = id => {
    let newList = cost.filter((index) => index.id !== id);
    setCost(newList);
  }

  const sortByDate = (a, b) => {
    return a.time - b.time
  }

  return (
    <div  className={styles.costList}>
      {
        cost.sort(sortByDate).map((value) => (
          <CostItem key={value.id} cost={value} removeCost={removeCost} />
        ))
      }
    </div>
  )
}

export default CostList
