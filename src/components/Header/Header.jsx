import styles from "./Header.module.css";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Purchases from "../Purchases/Purchases";

export default function Header() {
  return (
    <header className={styles.header}>
      <BurgerMenu />

      <h2>
        <span className={styles.shortTitle}>WH</span>
        <span className={styles.fullTitle}>WARM HEART</span>
      </h2>

      <Purchases />
    </header>
  );
}
