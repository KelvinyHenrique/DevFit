import React, { useState, useEffect } from 'react';
import {Text, Button} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
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
    
   const addWorkout = (item) => {
      if(props.myWorkouts.findIndex(i=>i.id==item.id) < 0) {
        props.addWorkout(item);
      } else {
        props.delWorkout(item);
      }
   }

    return (
        <Container>
        <HeaderText>Opções de treinos pré-criados com base no seu nível</HeaderText>
        <HeaderText><BoldText>Você selecionou {props.myWorkouts.length} treinos</BoldText></HeaderText>

    <WorkoutList 
    data={workoutJson} 
    renderItem={({item}) => <Workout 
    data={item}
    addAction={() => addWorkout(item)}
    />} 
    keyExtractor={item=>item.id}
    />  
        <HeaderText>Você pode alterar isso a qualquer momento.</HeaderText>
    </Container>
    );
}

Page.navigationOptions = ({navigation}) => {
    
    let btnNext = 'Ignorar';
    if(navigation.state.params && navigation.state.params.myWorkouts.length > 0) {
         btnNext = 'Concluir';
    }

    const NextButton = (props) => {

        const nextAction = ()  => {
            navigation.dispatch(StackActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName:'AppTab'})
                ]
            }))   
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
        addWorkout:(workout)=>dispatch({type:'ADD_WORKOUT', payload:{workout}}),
        delWorkout:(workout)=>dispatch({type:'DEL_WORKOUT', payload:{workout}})
        }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);