import React, { useState, useEffect } from 'react';
import { Text, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import Workout from '../components/Workout';

const Container = styled.SafeAreaView`
    flex:1;
`;

const WorkoutList = styled.FlatList`
    flex:1;
    padding:10px;
`;

const Page = (props) => {

    return (
        <Container>
            <WorkoutList 
            data={props.myWorkouts}
            renderItem={({item}) =>
                <Workout
                data={item}
                editAction={()=>{}}
                delAction={()=>{}}
                />
            }/>

        </Container>
    );
}

Page.navigationOptions = ({ navigation }) => {

    const ButtonArea = styled.TouchableHighlight`
        width:30px;
        height:30px;
        justifyContent:center;
        alignItems:center;
    `;

    const ButtonImage = styled.Image`
        width: 25px;
        height:25px;
    `;

    const AddWorkoutButton = () => {
        return (
            <ButtonArea>
                <ButtonImage source={require('../assets/add.png')} />
            </ButtonArea>
        )
    }

    return {
        title: 'Meus Treinos',
        headerRight:<AddWorkoutButton />,
        headerRightContainerStyle:{
            marginRight:10
        }
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name,
        myWorkouts: state.userReducer.myWorkouts
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);