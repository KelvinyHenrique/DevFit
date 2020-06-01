import React, {useState, useEffect} from 'react';
import styled  from 'styled-components/native';
import DefaultButton from '../components/DefaultButton';


const BalloonTriangle = styled.View`
    width:0;
    height:0;
    borderLeftColor:transparent;
    borderLeftWidth:15px;
    borderBottomWidth:15px;
    borderBottomColor:#dbd9d9;
    borderRightWidth:15px;
    borderRightColor:transparent;

`;
const BallonArea = styled.View`
    width:90%;
    padding:20px;
    backgroundColor:#dbd9d9;
    borderRadius:10px;
    min-height:100px;
`;

const BalloonBigText = styled.Text`
    fontSize:15px;
`;

const ButtonText = styled.Text`
    color:#FFF;
    fontWeight:bold;
`;

const BalloonText = styled.Text`
    fontSize:13px;
`;

export default (props) => {

    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let thisDate = new Date(today.getFullYear(), props.selectedMonth, props.selectedDay);

    let thisYear = thisDate.getFullYear();
    let thisMonth = thisDate.getMonth() + 1;
    let thisDay = thisDate.getDate();
    thisMonth = (thisMonth < 10)?'0'+thisMonth:thisMonth;
    thisDay = (thisDay < 10)?'0'+thisDay:thisDay;
    let thisFormated = `${thisYear}-${thisMonth}-${thisDay}`;

    let dayOff = false;
    let isToday = false;
    let isFuture = false;
    let isDone = false;
    
    if(props.workoutDays.includes(thisDate.getDay())) {
        dayOff =  true;
    } else if(thisDate.getTime() > today.getTime()) {
        isFuture = true;
    } else {
        if(props.dailyProgress.includes(thisFormated)) {
            isDone = true;
        } else {
            isDone = false;
        }
    }

    if(thisDate.getTime() == today.getTime()) {
        isToday = true;
    }

    return (
        <>
            <BalloonTriangle></BalloonTriangle>
            <BallonArea>
            {dayOff &&
                    <BalloonBigText>Dia de descanso!</BalloonBigText>
                }
                {isFuture &&
                    <BalloonBigText>Data no futuro</BalloonBigText>
                }
                {!dayOff && !isFuture && isDone &&
                    <>
                    <BalloonBigText><Strong>Parabéns</Strong>, você treinou!</BalloonBigText>
                    <DefaultButton>
                        <ButtonText>DESMARCAR</ButtonText>
                    </DefaultButton>
                    </>
                }
                {!dayOff && !isFuture && !isDone && !isToday &&
                    <>
                    <BalloonBigText>Fraco! Você falhou neste dia.</BalloonBigText>
                    <DefaultButton >
                        <ButtonText>MARCAR COMO FEITO</ButtonText>
                    </DefaultButton>
                    </>
                }
                {!dayOff && !isFuture && !isDone && isToday &&
                    <>
                    <BalloonBigText>HOJE TEM TREINO 🚀</BalloonBigText>
                    <BalloonText>Você tem ... pra treinar</BalloonText>
                    <DefaultButton>
                        <ButtonText>INICIAR TREINO</ButtonText>
                    </DefaultButton>
                    </>
                }
            </BallonArea>
        </>
    );
}
