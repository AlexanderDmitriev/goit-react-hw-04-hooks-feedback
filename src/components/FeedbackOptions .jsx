import React from "react";
import PropTypes from 'prop-types';
import { FeedbackButton } from "./FeedbackButton";
import {ButtonSection} from './App.styled';

export const FeedbackOptions  = ({options, onLeaveFeedback}) => {
    return <>
              <ButtonSection>
                  {Object.keys(options).map(feedbackName=> 
                  <FeedbackButton
                      key={feedbackName.valueOf().toUpperCase()} 
                      buttonName={feedbackName.valueOf().toUpperCase()}
                      onIncrement={()=>{onLeaveFeedback(feedbackName.valueOf())}}
                      />
                      )}
              </ButtonSection>
    </>
}

FeedbackButton.propTypes={
    buttonName:PropTypes.string
  }

