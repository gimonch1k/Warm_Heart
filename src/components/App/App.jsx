import { useState } from "react";

import styles from "./App.module.css";

import Header from "../Header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <footer>footer</footer>
    </div>
  );
}

export default App;
