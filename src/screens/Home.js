import React, { useState, useEffect } from 'react';
import { Text, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import HomeMonthScroll from '../components/HomeMonthScroll';
import HomeDaysScrool from '../components/HomeDaysScrool';
import HomeDayStatus from '../components/HomeDayStatus';


const Container = styled.SafeAreaView`
    alignItems:center;
`;

const Legend = styled.View`
    width:90%;
    alignItems:flex-start;
    marginTop:30px;
`;

const LegendText = styled.Text`
    color:#555;
`;

const LegendItem = styled.View`
    flexDirection:row;
    alignItems:center;
    marginTop:5px;
`;

const LegendBox = styled.View`
    width:15px;
    height:15px;
    backgroundColor: #CCC;
    marginRight:5px;
`;



const Page = (props) => {

    let today = new Date();
    const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
    const [selectedDay, setSelectedDay] = useState(today.getDate())

    return (
        <Container>
            <HomeMonthScroll
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
            />
            <HomeDaysScrool 
                selectedMonth={selectedMonth}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}

                dailyProgress={props.dailyProgress}
                workoutDays={props.workoutDays}
            />
            <HomeDayStatus />
            <Text>Mês: {selectedMonth}</Text>
            <Text>Dia: {selectedDay}</Text>
            <Legend>
                <LegendText>Legenda:</LegendText>

                <LegendItem>
                    <LegendBox style={{backgroundColor:'#B5EEFF'}} ></LegendBox>
                    <LegendText>Hoje</LegendText>
                </LegendItem>

                <LegendItem>
                    <LegendBox style={{backgroundColor:'#B5FFB8'}}></LegendBox>
                    <LegendText>Treino Feito</LegendText>
                </LegendItem>

                <LegendItem>
                    <LegendBox style={{backgroundColor:'#FFB5B5'}}></LegendBox>
                    <LegendText>Treino Perdido</LegendText>
                </LegendItem>

                <LegendItem>
                    <LegendBox style={{backgroundColor:'#F4F4F4', opacity:0.2}}></LegendBox>
                    <LegendText>Dia de descanso</LegendText>
                </LegendItem>

                <LegendItem>
                    <LegendBox style={{backgroundColor:'#F4F4F4'}}></LegendBox>
                    <LegendText>Dia futuro</LegendText>
                </LegendItem>
            </Legend>
        </Container>
    );
}

Page.navigationOptions = ({ navigation }) => {

    const ConfigButtonArea = styled.TouchableHighlight`
        width:30px;
        height:30px;
        justifyContent:center;
        alignItems: center;
        `;
    const ConfigButtonImage = styled.Image`
        width:25px;
        height:25px;
    `;

    const ConfigButton = () => {
        
        const btnAction = () => {
            navigation.navigate('HomeConfig');
        }

        return (
            <ConfigButtonArea onPress={btnAction}>
                <ConfigButtonImage source={require('../assets/config.png')} />
            </ConfigButtonArea>
        );
    }

    return {
        title: 'Seu progresso diário',
        headerRight: () => <ConfigButton />,
        headerRightContainerStyle:{
            marginRight:10
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dailyProgress: state.userReducer.dailyProgress,
        workoutDays: state.userReducer.workoutDays
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);