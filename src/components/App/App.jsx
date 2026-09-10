import styles from "./App.module.css";

import Header from "../Header/Header";
import Discount from "../Discount/Discount";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <Discount />

      <Footer />
    </div>
  );
}

export default App;
