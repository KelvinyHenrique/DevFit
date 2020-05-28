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

const Page = (props) => {


    return (
        <Container>
            <HomeMonthScroll />
            <HomeDaysScrool />
            <HomeDayStatus />
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
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);