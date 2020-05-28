import React, { useEffect, useState, useRef } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const MonthScroll = styled.ScrollView``;
const MonthButton = styled.TouchableHighlight``;
const MonthItem = styled.View``;
const MonthText = styled.Text``;

let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default (props) => {
    return (
        <MonthScroll
            horizontal={true}
        >
            {months.map((m, k) => (
                <MonthButton key={k}>
                    <MonthItem>
                        <MonthText>{m}</MonthText>
                    </MonthItem>

                </MonthButton>
            ))}
        </MonthScroll>
    );
}