import React, { useState } from 'react';
import {Text} from 'react-native';
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
const DaysArea = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
`;


const NextButton = styled.Button``;

const Page = (props) => {

    const start = () => {
        props.navigation.navigate('StarterName');
    }

    const nextAction = () => {
        if(!props.name)  {
            alert("Você precisa de um nome!");
            return
        } 

        props.navigation.navigate('StarterDias');
    }


    //Novo
    const [days, setDays] = useState([]);

    const addDay = (d) => {
        let newDays = [...days];
        if(!newDays.includes(d)) {
            newDays.push(d);
            console.log("Entrou aqui");
        } else {
            newDays = newDays.filter(i=>i!=d);
        }
        setDays(newDays);
        props.setWorkoutDays(newDays);
        props.navigation.setParams({days:newDays});
        alert(days);
    }
    
   /*  const toggleDay = (d) => { 
        let newWorkoutDays = [...props.workoutDays];
        if(!props.workoutDays.includes(d)){
            //Inserir
            newWorkoutDays.push(d);
            console.log("Entrou aqui");
        } else {
            //Remover
            newWorkoutDays = newWorkoutDays.filter(i=>i!=d);
        }
            props.setWorkoutDays(newWorkoutDays);
            alert(props.workoutDays.includes(1));
    } */


    let firstName = props.name.split(' ')[0];

    return (
        <Container>
            <HeaderText>Opa <Text style={{fontWeight:'bold'}}>{firstName}</Text>, tudo bem?</HeaderText>
            <HeaderText>Quais <Text style={{fontWeight:'bold'}}>dias da semana</Text> você pretende treinar?</HeaderText>

            <DaysArea>
                <DefaultButton onPress={()=>addDay(1)} bgcolor={days.includes(1)?'#a5e8bc':false} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Segunda</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>addDay(2)} bgcolor={days.includes(2)?'#a5e8bc':false} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Terça</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>addDay(3)} bgcolor={days.includes(3)?'#a5e8bc':false} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Quarta</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>addDay(4)} bgcolor={days.includes(4)?'#a5e8bc':false} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Quinta</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>addDay(5)} bgcolor={days.includes(5)?'#a5e8bc':false} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Sexta</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>addDay(6)} bgcolor={days.includes(6)?'#a5e8bc':false} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Sábado</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>addDay(0)} bgcolor={days.includes(0)?'#a5e8bc':false} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Domingo</Text>
                </DefaultButton>
            </DaysArea>

            <HeaderText>Você pode alterar isso a qualquer momento.</HeaderText>
            
        </Container>
    );
}

Page.navigationOptions = ({navigation}) => {

    const nextAction = () => {
        if(!navigation.state.params || !navigation.state.params.name) {
            alert('Você precisa de um nome!');
            return
        }
        navigation.navigate('StarterDias');
    }

    return {
        title:'',
        headerRight:() => <NextButton  title="Próximo" onPress={nextAction}/>,
        headerRightContainerStyle: {
            marginRight: 10
        }
    }
}

const mapStateToProps = (state) => {
    return {
        name:state.userReducer.name,
        workoutDays: state.userReducer.workoutDays
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name) => dispatch({type:'SET_NAME', payload:{name}}),
        setWorkoutDays: (workoutDays)=>dispatch({type:'SET_WORKOUTDAYS', payload: {workoutDays}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);