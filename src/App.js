import { useState} from 'react';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    
    switch (e.target.name) {
      case 'good':
        setGood(Number(good) + 1);
        break;
      case 'neutral':
        setNeutral(Number(neutral) + 1);
        break;
      case 'bad':
        setBad(Number(bad) + 1);
        break;
      
      default:
        return;
    }
  }


  const objectKeys = () => {
    let array = [];
    array.push(good, neutral, bad);
    return array;
  };

   const countTotalFeedback = () => {
    const arrayValues = objectKeys();
    return arrayValues.reduce((item, acc) => {
      return acc + item;
    }, 0);
   };
  
    const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percent = Math.round((good / total) * 100);
    if (isNaN(percent)) return 0;
    return percent;
  };

  
  
   return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    );
};


