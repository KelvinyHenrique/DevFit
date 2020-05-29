import React, { useEffect, useState, useRef } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const MonthScroll = styled.ScrollView`
    width:100%;
    height:60px;
`;
const MonthButton = styled.TouchableHighlight`
    width:${props=>props.width}px;
    justify-content:center;
    align-items:center;
`;
const MonthItem = styled.View`
    width:90%;
    height:30px;
    background-color:#EEE;
    justify-content:center;
    align-items:center;
    border-radius:15px;
`;
const MonthText = styled.Text``;

let MonthItemSelected = {backgroundColor:'#CCC', width:'100%', height:40};

const screenWidth = Math.round(Dimensions.get('window').width);
let thirdW = screenWidth / 3;
let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default (props) => {
    const MonthRef = useRef();
    const [selectedMonth, setSelectedMonth] = useState(props.selectedMonth);

    const scrollToMonth = (m) => {
        let posX = m * thirdW;
        MonthRef.current.scrollTo({x:posX, y: 0, animated: true});
    }

    const monthScrollEndAction = (e) => {
        let posX = e.nativeEvent.contentOffset.x;
        let targetMonth = Math.round(posX / thirdW);
        setSelectedMonth(targetMonth);
    }

    useEffect(()=>{
        props.setSelectedMonth(selectedMonth);
    }, [selectedMonth]);

    useEffect(()=>{
        setTimeout(()=>{
            scrollToMonth(selectedMonth);
        }, 10);
    }, [props.selectedMonth]);
    
    return (
        <MonthScroll
            ref={MonthRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={thirdW}
            snapToAlignment="center"
            contentContainerStyle={{paddingLeft:thirdW, paddingRight:thirdW}}
            onMomentumScrollEnd={monthScrollEndAction}
        >
            {months.map((m,k)=>(
                <MonthButton width={thirdW} key={k} onPress={()=>setSelectedMonth(k)} underlayColor="transparent">
                    <MonthItem style={k==(selectedMonth)?MonthItemSelected:{}}>
                        <MonthText>{m}</MonthText>
                    </MonthItem>
                </MonthButton>
            ))}
        </MonthScroll>
    );
};