import styles from './Header.module.css';

const Header = ({totalCosts}) => {
  return (
    <header className={styles.header}>
      <h3>Kosten</h3>
      <div className={styles.total}><h3>Totaal: € {totalCosts}</h3></div>
    </header>
  )
}

export default Header
