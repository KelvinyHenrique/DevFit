import React from 'react';
import styled from 'styled-components/native';
import useMuscleImage from './useMuscleImage';


const ExerciseItemArea = styled.TouchableHighlight`
    height:50px;
    flexDirection: row;
    backgroundColor:#FFF;
    marginBottom:10px;
`;

const ExerciseMuscleArea = styled.View`
    width:50px;
    height:50px;
    backgroundColor:#FFCC98;
    borderRadius:10px;
    justifyContent:center;
    alignItems:center;
`;


const ExerciseMuscleImage = styled.Image`
    width:35px;
    height:35px;
`;

const ExerciseInfo = styled.View`
    flexDirection:column;
    justifyContent:center;
    marginLeft:5px;
`;

const ExerciseName = styled.Text`
    fontSize:15px;
    color:#000;
`;

const ExerciseDetails = styled.Text`
    fontSize:12px;
    color:#999;
`;



export default (props) => {
    return (
        <ExerciseItemArea>
            <>
                <ExerciseMuscleArea>
                    <ExerciseMuscleImage source={useMuscleImage(props.data.muscle)} />
                </ExerciseMuscleArea>
                <ExerciseInfo>
                    <ExerciseName>{props.data.name}</ExerciseName>
                    <ExerciseDetails>
                        {`${props.data.sets} séries - ${props.data.reps} rep ${props.data.load?`- ${props.data.load} kg`:''}`}
                    </ExerciseDetails>
                </ExerciseInfo>
            </>
        </ExerciseItemArea>
    );
}