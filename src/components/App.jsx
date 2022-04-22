import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './App.styled';
import { Statistics } from './Statistics ';
import { FeedbackOptions } from './FeedbackOptions ';
import { Section } from './Section ';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  /* const [countTotalFeedback, setCountTotalFeedback] = useState(0); */
 /*  const [countPositiveFeedbackPercentage, setCountPositiveFeedbackPercentage] =
    useState(0); */

  const countTotalFeedback = good+neutral+bad;
  const countPositiveFeedbackPercentage=(good / countTotalFeedback).toFixed(2);

  const handleAddFeedback = buttonName => {
    switch (buttonName) {
      case 'good':
        setGood(prevCount => prevCount + 1);
        break;
      case 'neutral':
        setNeutral(prevCount => prevCount + 1);
        break;
      case 'bad':
        setBad(prevCount => prevCount + 1);
        break;
      default:
        console.log('oops');
    }
  };

 /*  useEffect(() => {
    setCountTotalFeedback(good + neutral + bad);
  }, [good, neutral, bad]); */

/*   useEffect(() => {
    return setCountPositiveFeedbackPercentage(good / countTotalFeedback);
  }, [good, countTotalFeedback]); */

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleAddFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </Section>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
