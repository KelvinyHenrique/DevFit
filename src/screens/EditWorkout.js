import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import DefaultButton from '../components/DefaultButton';
import ExerciseItemEdit from '../components/ExerciseItemEdit';

const Container = styled.SafeAreaView`
    flex:1;
    margin:20px;
`;
const NameInput = styled.TextInput`
    border:1px solid #CCC;
    width:100%;
    height:50px;
    borderRadius:10px;
    fontSize:16px;
    padding:10px;
`;

const ExercisesArea = styled.View`
    flex:1;
    marginTop:20px;
    paddingTop:20px;
    borderTopWidth:1px;
    borderTopColor:#CCC;
`;

const ButtonText = styled.Text`
    color:#FFF;
`;

const ExercisesList = styled.FlatList`
    flex:1;
    paddingTop:20px;
`;

const Page = (props) => {

    let workout = (props.navigation.state.params && props.navigation.state.params.workout)?props.navigation.state.params.workout:false;

    const [name, setName] = useState(workout?workout.name:'');
    const [id, setId] = useState(workout?workout.id:'');
    const [exercises, setExercises] = useState(workout?workout.exercises:[]);

    return (
        <Container>
          <NameInput 
          value={name}
          onChangeText={e=>setName(e)}
          placeholder=" Digite o nome do treino"
          />

        <ExercisesArea>
            <DefaultButton bgColor="#4AC34E">
                <ButtonText>
                    Adicionar Exercício 
                </ButtonText>

              
            </DefaultButton>

              <ExercisesList
                    data={exercises}
                    renderItem={({item})=>
                        <ExerciseItemEdit
                            data={item}
                        />
                    }
                    keyExtractor={item=>item.name}
                />
        </ExercisesArea>
        </Container>
    );
}

Page.navigationOptions = ({ navigation }) => {

    let isEdit = (navigation.state.params && navigation.state.params.workout)?true:false;
    
    const SaveArea = styled.TouchableHighlight`
    width:30px;
    height:30px;
    justifyContent:center;
    alignItems:center;
    `;

    const SaveImage = styled.Image`
        width:25px;
        height:25px;
    `;


    const SaveWorkoutButton = () => {
        return (
            <SaveArea>
                <SaveImage source={require('../assets/check-black.png')} />
            </SaveArea>
        );
    }

    return {
        title: isEdit?'Editar Treino':'Adicionar Treino',
        headerRight: () => <SaveWorkoutButton />,
        headerRightContainerStyle:{
            marginRight:10
        }
    }
}

const mapStateToProps = (state) => {
    return {
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);