import React, { useEffect, useState, useRef } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const MonthScroll = styled.ScrollView`
    width:100%;
    height:60px;
`;
const MonthButton = styled.TouchableHighlight`
    width:${props=>props.width}px;
    justifyContent:center;
    alignItems:center;
`;
const MonthItem = styled.View`
    width: 90%;
    height:30px;
    backgroundColor:#EEE;
    borderRadius:15px;
    justifyContent:center;
    alignItems:center;

`;
const MonthText = styled.Text``;

let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const screenWidth = Math.round(Dimensions.get('window').width);
let thirdW = screenWidth / 3;

export default (props) => {
    
   const MonthsRef = useRef();

    const [selectedMonth, setSelectedMonth] = useState(props.selectedMonth);
    
    const handleScrollEnd = (e) => {
    let posX = e.nativeEvent.contentOffset.x;
    let targetMonth = Math.round(posX  / thirdW);
    setSelectedMonth(targetMonth);
}
    
    useEffect(() => {
        props.setSelectedMonth(selectedMonth);
    }, [selectedMonth]);    

    return (
        <MonthScroll
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={thirdW}
            contentContainerStyle={{paddingLeft:thirdW, paddingRight:thirdW}} 
            onMomentumScrollEnd={handleScrollEnd}
        >
            {months.map((m, k) => (
                <MonthButton key={k} width={thirdW} >
                    <MonthItem>
                        <MonthText>{m}</MonthText>
                    </MonthItem>

                </MonthButton>
            ))}
        </MonthScroll>
    );
}