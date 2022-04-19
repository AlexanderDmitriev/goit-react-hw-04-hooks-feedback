import React from "react";
import {ContentList} from './App.styled';
import {CustomButton} from './FeedbackButton.styled';

export const FeedbackButton = ({buttonName,onIncrement}) => {
    return <ContentList>
        <CustomButton type="button" onClick={onIncrement} >
             {buttonName}
        </CustomButton>
    </ContentList>
}