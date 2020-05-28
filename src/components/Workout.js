import React, { useState } from 'react';
import styled from 'styled-components/native';
import useMuscleImage from './useMuscleImage';

const Workout = styled.View`
    background-color:#f1f1f1;
    flex-direction:row;
    border-radius:10px;
    margin-bottom:20px;
    border:2px solid #DDD;
`;
const WorkoutInfo = styled.View`
    flex:1;
`;
const WorkoutTitle = styled.Text`
    font-size:17px;
    margin:10px;
`;
const MuscleScroll = styled.ScrollView`
    margin:10px;
`;
const MuscleGroup = styled.View`
    width:40px;
    height:40px;
    background-color:#ffcc98;
    border-radius:5px;
    margin-right:5px;
    justify-content:center;
    align-items:center;
`;
const MuscleImage = styled.Image`
    width:30px;
    height:30px;
`;
const WorkoutActions = styled.View`
    justify-content:center;
`;
const WorkoutButton = styled.TouchableHighlight`
    width:25px;
    height:25px;
    margin:20px;
    justify-content:center;
    align-items:center;
`;
const WorkoutButtonImage = styled.Image`
    width:25px;
    height:25px;
`;

export default (props) => {

    const [included, setIncluded] = useState(false);

    const muscleGroups = [];
    for (let i in props.data.exercises) {
        if (!muscleGroups.includes(props.data.exercises[i].muscle)) {
            muscleGroups.push(props.data.exercises[i].muscle);
        }
    }

    const addWorkout = () => {
        setIncluded(!included);
        props.addAction();
    }


    return (
        <Workout>
            <WorkoutInfo>
                <WorkoutTitle>{props.data.name}</WorkoutTitle>
                <MuscleScroll horizontal={true}>
                    {muscleGroups.map((m, k) => (
                        <MuscleGroup key={k}>
                            <MuscleImage source={useMuscleImage(m)} />
                        </MuscleGroup>
                    ))}
                </MuscleScroll>

            </WorkoutInfo>

            <WorkoutActions>
            <WorkoutButton onPress={() => addWorkout()} underlayColor="transparent">
                        <WorkoutButtonImage source={included?require('../assets/check-black.png'):require('../assets/add.png')} />
                    </WorkoutButton>
            </WorkoutActions>
        </Workout>
    );
}