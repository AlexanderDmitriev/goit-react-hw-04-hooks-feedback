import React, { Component, useState, useEffect   } from 'react';
import PropTypes from 'prop-types';
import { Container } from './App.styled';
import { Statistics } from './Statistics ';
import { FeedbackOptions } from './FeedbackOptions ';
import { Section } from './Section ';

/* export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddFeedback2 = buttonName => {
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };

  countTotalFeedback2 = () => {
    return Object.values(this.state).reduce((sum, count) => {
      return sum + count;
    }, 0);
  };

  countPositiveFeedbackPercentage2 = () => {
    return this.state.good > 0
      ? (this.state.good / this.countTotalFeedback2()).toFixed(2)
      : 0;
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleAddFeedback2}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback2() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback2()}
              positivePercentage={this.countPositiveFeedbackPercentage2()}
            />
          ) : (
            <p>There is no feedback</p>
          )}
        </Section>
      </Container>
    );
  }
} */



export const App2 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let countTotalFeedback=0;
  let countPositiveFeedbackPercentage=0;

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
        console.log("oops");
    }
  };

    useEffect(()=>{
      countTotalFeedback=good+neutral+bad;
    },
    [good,neutral,bad]);

    useEffect(()=>{
      countPositiveFeedbackPercentage=good/countTotalFeedback;
    },
    [good]);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{good,neutral,bad}}
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