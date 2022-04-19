import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Container } from "./App.styled";
import {Statistics} from './Statistics ';
import {FeedbackOptions} from './FeedbackOptions ';
import {Section} from './Section ';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleAddFeedback = (e) => {
    const eventName = e.target.textContent.toLowerCase();
    this.setState(prevState => {
      return {
        [eventName]: prevState[eventName] + 1,
      };
    });
  };

  handleAddFeedback2 = (buttonName) => {
    console.log(this);
      this.setState(prevState => ({
        [buttonName]: prevState[buttonName]+1,
      }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((sum,count)=>{return sum+count},0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good>0? (this.state.good/this.countTotalFeedback()).toFixed(2):0;
  };

  render() {
  
    return <Container>
              <Section title="Please leave feedback">
                <FeedbackOptions
                  options={this.state}
                  onLeaveFeedback={this.handleAddFeedback2}
                />
              </Section>
              <Section title="Statistics">
                {this.countTotalFeedback()>0?(<Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                  />):(<p>There is no feedback</p>)}
                  
              </Section>
              
          </Container>;
  }
}

Section.propTypes={
  title:PropTypes.string
}


