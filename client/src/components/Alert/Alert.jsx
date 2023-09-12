import styles from './Alert.module.css';

export default function Alert({ title, message, onClose }) {
  return (
    <div className={styles.alert}>
      <div className={styles.alertContent}>
        <h2>{title || "Pokerror!"}</h2>
        <p>{message}</p>
        <button onClick={onClose}>Accept</button>
      </div>
    </div>
  );
}

