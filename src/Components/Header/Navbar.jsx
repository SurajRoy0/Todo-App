import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>MY TODOs</h1>
      <ul className={styles.navbarList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="all-todos">All Todos</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
