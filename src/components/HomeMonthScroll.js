import React, { useEffect, useState, useRef } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const MonthScroll = styled.ScrollView``;
const MonthButton = styled.TouchableHighlight`
    width:${props=>props.width}px;
    justifyContent:center;
    alignItems:center;
`;
const MonthItem = styled.View`
    marginTop:15px;
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
    return (
        <MonthScroll
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
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