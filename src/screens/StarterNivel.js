import React, { useState } from 'react';
import {Text, Button} from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import DefaultButton from '../components/DefaultButton';

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

const NextButton = styled.Button``;


const Page = (props) => {
    
    let funnyPhrase = '';

    switch(props.workoutDays.length) {
        case 1: 
            funnyPhrase = 'Só um dia não vai adiantar muito, mas...';
            break;
        case 2:
            funnyPhrase = 'Dois dias eu acho pouco, mas quem sou eu para te julgar?';
            break;
        case 3:
            funnyPhrase = 'Legal, 3 dias dá pro gasto...';
            break;
        case 4:
            funnyPhrase = 'Legal, 4 dias vai ser TOP';
            break;
        case 5:
            funnyPhrase = "É isso ai, 5 dias é o mínimo, let's go!";
            break;
        
        case 6:
            funnyPhrase = 'É, 6 dias não é pra todo mundo...';
            break;
        case 7:
            funnyPhrase = 'Wooow! Todo dia?! WTF?!';
            break;

        }

    const setMyLevel = (l) => {
        props.setLevel(l);
        props.navigation.setParams({level:l});
    }

    return (
        <Container>
        <HeaderText>{funnyPhrase}</HeaderText>
        <HeaderText><BoldText>Qual seu nível hoje?</BoldText></HeaderText>

        <LevelArea>
            <DefaultButton onPress={()=>setMyLevel('beginner')} bgColor={props.level=='beginner'?'#a5e8bc':false} style={{marginBottom:20}} underlayColor="#CCC">
                <Text>Iniciante / Um frango</Text>
            </DefaultButton>
            <DefaultButton onPress={()=>setMyLevel('intermediate')}  bgColor={props.level=='intermediate'?'#a5e8bc':false} style={{marginBottom:20}} underlayColor="#CCC">
                <Text>Intermediário / Me viro bom</Text>
            </DefaultButton>
            <DefaultButton onPress={()=>setMyLevel('advanced')}  bgColor={props.level=='advanced'?'#a5e8bc':false} style={{marginBottom:20}} underlayColor="#CCC">
                <Text>Avançado / Primo do The Rock</Text>
            </DefaultButton>
        </LevelArea>

        <HeaderText>Você pode alterar isso a qualquer momento.</HeaderText>
        
    </Container>
    );
}

Page.navigationOptions = ({navigation}) => {

    const NextButton = (props) => {

        const nextAction = () => {
            if(!props.navigation.state.params || !props.navigation.state.params.level) {
                alert("Você precisa escolher uma opção");
                return;
            }
            props.navigation.navigate('StarterRecommendations');
        }
    
        return (
            <Button title="Próximo" onPress={nextAction} />
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
        level:state.userReducer.level,
        workoutDays: state.userReducer.workoutDays
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
         setLevel: (level)=>dispatch({type:'SET_LEVEL', payload: {level}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);