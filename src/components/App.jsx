// import { buildQueries } from '@testing-library/react';
// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = event => {
    const { name } = event.target;
    console.log(event);
    console.log(event.target);

    switch (name) {
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
        console.log('error!');
        return;
    }
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((good * 100) / totalFeedback)
    : 0;
  const options = ['good', 'neutral', 'bad'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
      <GlobalStyle />
    </div>
  );
}
