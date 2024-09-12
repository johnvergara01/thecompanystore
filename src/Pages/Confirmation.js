import styles from "./Confirmation.module.css";

const Confirmation = () => {
  return (
    <html>
      <div className={styles.text}>
        <p className={styles.thanks}>Thank you for your order!</p>
        <p>Your order confirmation # is 123456789</p>
        <p>Your items will arrive momentarily</p>
      </div>
    </html>
  );
};

export default Confirmation;
