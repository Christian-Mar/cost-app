import styles from './Header.module.css';

const Header = ({totalCosts}) => {
  return (
    <header>
      <h1>Cost App</h1>
      <div className={styles.total}>€ {totalCosts}</div>
    </header>
  )
}

export default Header
