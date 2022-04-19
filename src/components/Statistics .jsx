import PropTypes from 'prop-types';
import { StatisticsList } from "./StatisticsList";
import { ContentList,StatisticSection } from "./App.styled";

export const Statistics = ({good,neutral,bad,total,positivePercentage}) => {

    return (<>
              <StatisticSection>
                  <StatisticsList 
                  good={good}
                  neutral={neutral}
                  bad={bad} />
              </StatisticSection>
              <StatisticSection>
                <ContentList>
                  <p>Total: {total}</p>
                </ContentList>
                <ContentList>
                  <p>Positive feedback: {positivePercentage*100} %</p>
                </ContentList>
              </StatisticSection>
    </>);
}

StatisticsList.propTypes={
    good:PropTypes.number,
    neutral:PropTypes.number,
    bad:PropTypes.number,
  }