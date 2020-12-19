import React, { useState } from 'react';
import Section from '../Section';
import FeedbackOption from '../FeedbackOption';
import Statistics from '../Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleButtonClick = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };
  const TotalFeedback = good + neutral + bad;
  const PositiveFeedbackPercentage = Math.round((good * 100) / TotalFeedback);
  return (
    <Section title="Please leave feedback">
      <FeedbackOption
        options={['good', 'neutral', 'bad']}
        onButtonClick={handleButtonClick}
      />
      <Statistics
        feedbackTotal={TotalFeedback}
        feedbackPercentage={PositiveFeedbackPercentage}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </Section>
  );
}

export default App;
