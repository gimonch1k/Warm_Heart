import styles from "./Form.module.css";

import Button from "../Button/Button";

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.wrapper}>
        <input type="text" placeholder="Email address" />
      </div>

      <Button>Submit</Button>
    </form>
  );
}
