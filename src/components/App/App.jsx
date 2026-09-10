import styles from "./App.module.css";

import Header from "../Header/Header";
import Form from "../Form/Form";
import Section from "../Section/Section";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <Section>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            <span>Get 20% off</span> <span>your first purchase</span>
          </h2>
          <p className={styles.description}>
            Subscribe to our newsletter and get a promo code for a 20% discount! You will receive only the most
            important and relevant news.
          </p>
        </div>

        <Form />
      </Section>

      <Footer />
    </div>
  );
}

export default App;
