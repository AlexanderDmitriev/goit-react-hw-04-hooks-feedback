import {ContentList} from './App.styled';

export const StatisticsList = ({good,neutral,bad}) => {
    return <>        
            <ContentList key="good">Good : {good}</ContentList>
            <ContentList key="neutral">neutral : {neutral}</ContentList>
            <ContentList key="bad">bad : {bad}</ContentList>
    </>
}