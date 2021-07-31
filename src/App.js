import { useState, useEffect } from 'react';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const onLeaveFeedback = e => {
    
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  };

  useEffect(() => {
    const totalFeedback = good + neutral + bad;
    setTotal(totalFeedback);
  }, [good, neutral, bad]);


    const countPositiveFeedbackPercentage = () => {
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
          total={total}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    );
};


