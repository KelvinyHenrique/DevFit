import React, { useState, useEffect } from 'react';
import { Text, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import Workout from '../components/Workout';
import { HeaderBackButton } from 'react-navigation-stack';

const Container = styled.SafeAreaView`
    flex:1;
    margin:20px;
`;

const WorkoutList = styled.FlatList`
    flex:1;
`;

const Title = styled.Text`
    marginBottom:10px;
`;

const Page = (props) => {

    let lastWorkout = false;
    if (props.lastWorkout) {
        lastWorkout = props.myWorkouts.find(i => i.id == props.lastWorkout);
    }

    const goWorkout = (workout) => {
        props.navigation.navigate('WorkoutChecklist', { workout });
    }

    return (
        <Container>
            {lastWorkout &&
                <>
                    <Title>Seu último treino foi:</Title>
                    <Workout data={lastWorkout} />
                </>
            }

            <Title>Escolha seu treino de hoje:</Title>
            <WorkoutList
                data={props.myWorkouts}
                renderItem={({ item }) =>
                    <Workout
                        data={item}
                        goAction={() => goWorkout(item)}
                    />
                } />

        </Container>
    );
}

Page.navigationOptions = ({ navigation }) => {

    const handleBackAction = () => {
        navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'AppTab' })
            ]
        }));
    }

    return {
        title: 'Escolha seu Treino',
        headerLeft: () => <HeaderBackButton onPress={handleBackAction} />
    }
}

const mapStateToProps = (state) => {
    return {
        lastWorkout: state.userReducer.lastWorkout,
        myWorkouts: state.userReducer.myWorkouts
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);