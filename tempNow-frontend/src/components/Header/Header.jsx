import styles from "./Header.module.css";
import { FaMoon, FaSearch } from "react-icons/fa";

function Header({ setNomePesquisado, buscarClima }) {
  const handleInputChange = (event) => {
    setNomePesquisado(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    buscarClima();
  };
  return (
    <header className={styles.header_container}>
      <img src="/assets/images/logo.png" alt="Logo" className={styles.logo} />

      <form className={styles.search_wrapper} onSubmit={handleSearchSubmit}>
        <span className={styles.icon_wrapper}>
          <FaMoon />
        </span>
        <input
          type="text"
          placeholder="Digite o nome da cidade..."
          className={styles.search_input}
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
