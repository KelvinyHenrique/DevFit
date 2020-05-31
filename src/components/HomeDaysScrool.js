import React, { useEffect, useState, useRef } from 'react';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';
import { set } from 'react-native-reanimated';

const DaysScroll = styled.ScrollView`
    width:100%;
    height:50px;
`;

const DayButton = styled.TouchableHighlight`
    width:${props => props.width}px;
    justifyContent:center;
    alignItems:center;
`;

const DayItem = styled.View`
    width:30px;
    height:30px;
    borderRadius:15px;
    backgroundColor:#EEE;
    justifyContent:center;
    alignItems:center;
`;

const DayText = styled.Text``;

const screenWidth = Math.round(Dimensions.get('window').width);
let dayW = Math.round(screenWidth / 9);

let offsetW = Math.round((screenWidth - dayW) / 2);

const Day = ({ day, month, workoutDays, daylyProgress, onPress }) => {

    let bgColor = '#F4F4F4';
    let opacity = 1;

    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);


    let thisDate = new Date(today.getFullYear(), month, day);

    if(workoutDays.includes( thisDate.getDay() )){

    } else {
        opacity = 0.2;
    }


    if(thisDate.getTime() == today.getTime()) {
        bgColor = '#b5eeff';
        opacity = 1;
    }



    return (
        <DayButton width={dayW}>
            <DayItem style={{opacity, backgroundColor:bgColor}} >
                <DayText>
                    {day}
                </DayText>
            </DayItem>
        </DayButton>
    );
}


export default (props) => {
    const DayRef = useRef();
    const [selectedDay, setSelectedDay] = useState(props.selectedDay);

    const scrollToDay = (m) => {
        /*
        let posX = m * thirdW;
        MonthRef.current.scrollTo({x:posX, y: 0, animated: true});*/
    }

    const monthScrollEndAction = (e) => {
        /*
        let posX = e.nativeEvent.contentOffset.x;
        let targetMonth = Math.round(posX / thirdW);
        setSelectedMonth(targetMonth);*/
    }

    useEffect(() => {
        props.setSelectedDay(setSelectedDay);
    }, [selectedDay]);

    useEffect(() => {
        setTimeout(() => {
            if (props.selectedMonth == new Date().getMonth()) {
                scrollToDay(new Date().getDate());
            } else {
                scrollToDay(1);
            }
        }, 10);
    }, [props.selectedMonth]);

    let days = [];
    let daysInMonth = new Date(new Date().getFullYear(), (props.selectedMonth + 1), 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }
    return (
        <DaysScroll
            ref={DayRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={dayW}
            snapToAlignment="center"
            contentContainerStyle={{ paddingLeft: offsetW, paddingRight: offsetW }}
            onMomentumScrollEnd={monthScrollEndAction}
        >
            {days.map((d, k) => (
                <Day
                    key={k}
                    day={d}
                    month={props.selectedMonth}
                    daylyProgress={props.dailyProgress}
                    workoutDays={props.workoutDays}
                    onPress={() => scrollToDay(d)}
                />
            ))}
        </DaysScroll>
    );
};