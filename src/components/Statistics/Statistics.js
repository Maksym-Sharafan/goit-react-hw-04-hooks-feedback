import Notification from '../Notification';

import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return total() === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <>
        <h2 className={styles.statistics__title}>Statistics</h2>
        <ul className={styles.statistics__list}>
          <li className={styles.statistics__item}>
            Good:<span className={styles.span__statistic}>{good}</span>
          </li>
          <li className={styles.statistics__item}>
            Neutral:<span className={styles.span__statistic}>{neutral}</span>
          </li>
          <li className={styles.statistics__item}>
            Bad:<span className={styles.span__statistic}>{bad}</span>
          </li>
          <li className={styles.statistics__total}>
            Total:<span className={styles.span__statistic}>{total()}</span>
          </li>
          <li className={styles.statistics__percent}>
            Positive feedback:
            <span className={styles.span__statistic}>
              {positivePercentage()}
            </span>
            %
          </li>
        </ul>
      </>
    );
  
}

export default Statistics;
