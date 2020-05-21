import React, { useState, useEffect } from 'react';
import {Text, Button} from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import workoutJson from '../presetWorkouts.json';
import Workout from '../components/Workout';


const Container = styled.SafeAreaView`
    flex: 1;
    alignItems:center;
    backgroundColor:#FFF;
    paddingLeft:30px;
    paddingRight: 30px; 
    paddingTop:50px;

`;

const HeaderText = styled.Text`
    fontSize:15px;
    color:#333;
    marginBottom:30px;
    text-align:center;
`;
const LevelArea = styled.View`
    width:100%;
`;

const BoldText = styled.Text`
    fontWeight:bold;
`;
const WorkoutList = styled.FlatList`
    width:100%;
`;

const NextButton = styled.Button``;


const Page = (props) => {

    useEffect(()=> {
    props.navigation.setParams({myWorkouts:props.myWorkouts})
    }, [props.myWorkouts]);
    
    useEffect(() => {
        
    })
    return (
        <Container>
        <HeaderText>Opções de treinos pré-criados com base no seu nível</HeaderText>
        <HeaderText><BoldText>Você selecionou {props.myWorkouts.length} treinos</BoldText></HeaderText>

    <WorkoutList 
    data={workoutJson} 
    renderItem={({item}) => <Workout data={item}/>} 
    keyExtractor={item=>item.id}
    />  
        <HeaderText>Você pode alterar isso a qualquer momento.</HeaderText>
    </Container>
    );
}

Page.navigationOptions = ({navigation}) => {
    
    let btnNext = 'Ignorar';
    if(navigation.state.params && navigation.state.params.myWorkouts.length > 0) {
        let btnNext = 'Concluir';
    }

    const NextButton = (props) => {

      
        const nextAction = () => {
            /* if(!props.navigation.state.params || !props.navigation.state.params.level) {
                alert("Você precisa escolher uma opção");
                return;
            }
            props.navigation.navigate('StarterRecommendations'); */
        }
    
        return (
            <Button title={btnNext} onPress={nextAction} />
        );
    }


    return {
        title:'',
        headerRight:() => <NextButton navigation={navigation} />,
        headerRightContainerStyle:{
            marginRight:10
        }
    };
}

const mapStateToProps = (state) => {
    return {
        myWorkouts: state.userReducer.myWorkouts
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
         setLevel: (level)=>dispatch({type:'SET_LEVEL', payload: {level}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);