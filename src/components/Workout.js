import React from 'react';
import styled from 'styled-components/native';


const Workout = styled.View`
    backgroundColor:#F1F1F1;
    flexDirection:row;
    borderRadius:10px;
    marginBottom:20px;
    border:2px solid #DDD;
`;
const WorkoutInfo = styled.View`
    flex:1;
`;
const WorkoutTitle = styled.Text`
    fontSize:17px;
    margin:10px;
`;
const MuscleScrool = styled.ScrollView`
    margin:10px;
`;

const MuscleGroup = styled.View``;
const MuscleImage = styled.Image``;
const WorkoutActions = styled.View``;
const WorkoutButton = styled.TouchableHighlight`
    width:25px;
    height:25px;
    margin:20px;
    justifyContent:center;
    alignItems:center;
`;
const WorkoutImage = styled.Image`
    width:25px;
    height:25px;
`;


export default (props) => {


    let muscleGroups = [];
    for(let i in props.data.exercises) {
        if(muscleGroups.includes(props.data.exercises[i].muscle)){
            muscleGroups.push(props.data.exercises[i].muscle);
        }
    }

    return (
        <Workout>
            <WorkoutInfo>
                <WorkoutTitle>
                    {props.data.name}
                </WorkoutTitle>

                <MuscleScrool horizontal={true}>
                    {muscleGroups.map((m, index) => {
                        <MuscleGroup key={index}>
                            <MuscleImage SOURCE={} />
                        </MuscleGroup>
                    })}
                </MuscleScrool>

            </WorkoutInfo>

            <WorkoutActions>
                <WorkoutButton>
                    <WorkoutImage source={require('../assets/add.png')}/>
                </WorkoutButton>
            </WorkoutActions>
        </Workout>
    );
}