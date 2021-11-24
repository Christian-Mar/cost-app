import styles from './CostList.module.css';
import CostItem from './CostItem';

const CostList = ({cost, setCost}) => {
  const removeCost = i => {
    let temp = cost.filter((v, index) => index != i);
    setCost(temp);
  }

  const sortByDate = (a, b) => {
    return a.time - b.time
  }

  return (
    <div className={styles.costList}>
      {
        cost.sort(sortByDate).map((value, index) => (
          <CostItem key={index} cost={value} index={index} removeCost={removeCost} />
        ))
      }
    </div>
  )
}

export default CostList
