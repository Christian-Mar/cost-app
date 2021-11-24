import styles from './Header.module.css';

const Header = ({totalCosts}) => {
  return (
    <header className={styles.header}>
      <h3>Kosten</h3>
    </header>
  )
}

export default Header
