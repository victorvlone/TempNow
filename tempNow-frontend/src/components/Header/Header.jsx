import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header_container}>
      <img src="../public/assets/images/logo.png" alt="" className={styles.logo} />
      <div className="search-bar">
        <input type="text" className={styles.search_input} />
      </div>
    </header>
  );
}
export default Header;
