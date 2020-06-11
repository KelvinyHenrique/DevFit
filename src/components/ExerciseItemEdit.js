import React from 'react';
import styled from 'styled-components/native';
import useMuscleImage from './useMuscleImage';
import { SwipeRow } from 'react-native-swipe-list-view';


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

const ExerciseSwipe = styled.TouchableHighlight`
    height:50px;
    backgroundColor:#FF0000;
    justifyContent:center;
`;

const ExerciseSwipeIcon = styled.Image`
    width:20px;
    height:20px;
    marginLeft:15px;
`;


export default (props) => {
    return (

        <SwipeRow leftOpenValue={50}  disableLeftSwipe={true}>
            <ExerciseSwipe onPress={props.delAction} underlayColor="#FF0000">
                <ExerciseSwipeIcon source={require('../assets/trash-white.png')} />
            </ExerciseSwipe>

            <ExerciseItemArea onPress={props.editAction} underlayColor="#FFF">
                <>
                    <ExerciseMuscleArea>
                        <ExerciseMuscleImage source={useMuscleImage(props.data.muscle)} />
                    </ExerciseMuscleArea>
                    <ExerciseInfo>
                        <ExerciseName>{props.data.name}</ExerciseName>
                        <ExerciseDetails>
                            {`${props.data.sets} séries - ${props.data.reps} rep ${props.data.load ? `- ${props.data.load} kg` : ''}`}
                        </ExerciseDetails>
                    </ExerciseInfo>
                </>
            </ExerciseItemArea>
        </SwipeRow>
    );
}