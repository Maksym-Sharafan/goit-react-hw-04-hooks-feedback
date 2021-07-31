import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  
  return (
    <div className={styles.button__wrapper}>
      <button
        className={styles.button__feedback}
        type="button"
        onClick={onLeaveFeedback}
        name="good"
      >
        good
      </button>
      <button
        className={styles.button__feedback}
        type="button"
        onClick={onLeaveFeedback}
        name="neutral"
      >
        neutral
      </button>
      <button
        className={styles.button__feedback}
        type="button"
        onClick={onLeaveFeedback}
        name="bad"
      >
        bad
      </button>
    </div>
  ); 
};

export default FeedbackOptions;

