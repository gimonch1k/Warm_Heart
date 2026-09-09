import { useState } from "react";

import styles from "./BurgerMenu.module.css";

import Burger from "../Burger/Burger";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Burger onToggleIsOpen={handleToggleIsOpen} />

      <nav className={isOpen ? styles.dropDown : styles.navigation}>
        {isOpen && <p onClick={handleToggleIsOpen}>✖</p>}
        <a href="#">Shop</a>
        <a href="#">About us</a>
        <a href="#">Contacts</a>
      </nav>
    </>
  );
}
