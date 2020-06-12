import React, { useState, useEffect } from 'react';
import { Text, Button, StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import ExerciseItem from '../components/ExerciseItem';


const Container = styled.ImageBackground`
    flex:1;
    alignItems:center;
    backgroundColor:#000;
`;

const SafeArea = styled.SafeAreaView`
    flex:1;
    width:100%;
    alignItems:center;
    backgroundColor:rgba(1, 59, 14, 0.9);
`;

const WorkoutHeader = styled.View`
    flexDirection:row;
    width:90%;
    alignItems:center;
    height:70px;
`;
const WorkoutTitle = styled.Text`
    flex:1;
    color:#FFF;
    fontSize:20px;
`;

const WorkoutClose = styled.TouchableHighlight`
    width:50px;
    height:50px;
    justifyContent:center;
    alignItems:center;
`;
const WorkoutCloseText = styled.Text`
    fontSize:22px;
    color:#FFF;
    fontWeight:bold;
`;

const WorkoutList = styled.FlatList`
    width:90%;
    flex:1;
`;


const Page = (props) => {

    let workout = props.navigation.state.params.workout;

    const [exercises, setExercises] = useState([...workout.exercises]);

    return (
        <Container source={require('../assets/fitness.jpg')}>
            <StatusBar  barStyle="light-content"/>
            <SafeArea>
                <WorkoutHeader>
                <WorkoutTitle>{workout.name}</WorkoutTitle>
                    <WorkoutClose onPress={()=>props.navigation.goBack()} underlayColor="transparent">
                        <WorkoutCloseText>X</WorkoutCloseText>
                    </WorkoutClose>
                </WorkoutHeader>

                <WorkoutList 
                data={exercises}
                renderItem={({item})=> 
                    <ExerciseItem 
                        data={item}
                    />
                }
                keyExtractor={item=>item.id.toString()}
                />
            </SafeArea>
        </Container>
    );
}

Page.navigationOptions = ({ navigation }) => {

    return {
        headerShown:false
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