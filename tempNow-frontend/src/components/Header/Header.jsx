import styles from "./Header.module.css";
import { FaMoon, FaSearch, FaSun } from "react-icons/fa";

function Header({ setNomePesquisado, buscarClima, setDarkMode, darkMode }) {
  const handleInputChange = (event) => {
    setNomePesquisado(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    buscarClima();
  };

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <header className={styles.header_container}>
      <img src="/assets/images/logo.png" alt="Logo" className={styles.logo} />

      <form className={styles.search_wrapper} onSubmit={handleSearchSubmit}>
        <span className={styles.icon_wrapper} onClick={handleThemeToggle}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </span>
        <input
          type="text"
          placeholder="Digite o nome da cidade..."
          className={`${styles.search_input} ${
            darkMode ? styles.search_input_dark : ""
          }`}
          onChange={handleInputChange}
        />

        <button type="submit" className={styles.search_button}>
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
export default Header;
