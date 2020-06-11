import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import DefaultButton from '../components/DefaultButton';
import ExerciseItemEdit from '../components/ExerciseItemEdit';
import CustomModal from '../components/CustomModal';


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

const ModalLabel = styled.Text`
    fontSize:15px;
    fontWeight:bold;
    marginTop:10px;
`;
const ModalMucles = styled.ScrollView``;
const ModalInput = styled.TextInput`
    width:100%;
    fontSize:14px;
    color:#333;
    height:40px;
    borderBottomWidth:1px;
    borderBottomColor:#CCC;
`;


const ModalMuscle = styled.TouchableHighlight`
    width:50px;
    height:50px;
    backgroundColor:#EEE;
    borderRadius:10px;
    justifyContent:center;
    alignItems:center;
    marginRight:10px;
    opacity:${props=>props.opacity};
`;

const ModalMuscleImage = styled.Image`
    width:35px;
    height:35px;
`;



const Page = (props) => {

    let workout = (props.navigation.state.params && props.navigation.state.params.workout) ? props.navigation.state.params.workout : false;

    const [name, setName] = useState(workout ? workout.name : '');
    const [id, setId] = useState(workout ? workout.id : '');
    const [exercises, setExercises] = useState(workout ? workout.exercises : []);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalId, setModalId] = useState('');
    const [modalName, setModalName] = useState('');
    const [modalMuscle, setModalMuscle] = useState('');
    const [modalSets, setModalSets] = useState('');
    const [modalLoaad, setModalLoad] = useState('');
    const [modalReps, setModalReps] = useState('');








    const editExercise = (exercise) => {
        setModalVisible(true);
        setModalId(exercise.id);
        setModalName(exercise.name);
        setModalMuscle(exercise.muscle);
        setModalSets(exercise.sets);
        setModalReps(exercise.reps);
        setModalLoad(exercise.load);
    }

    const delExercise = (exercise) => {

        let newExercises = [...exercises];

        newExercises = newExercises.filter(i => i.id != exercise.id);

        setExercises(newExercises);
    }

    return (
        <Container>
            <CustomModal visible={modalVisible} closeAction={() => { setModalVisible(false) }} >
                <ModalLabel>Músculo de Foco</ModalLabel>
                <ModalMucles horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ModalMuscle opacity={modalMuscle=='abs'?1:0.3}>
                        <ModalMuscleImage source={require('../assets/muscles/abs.png')} />
                    </ModalMuscle>
                </ModalMucles>
                <ModalLabel>Nome do exercício</ModalLabel>
                <ModalInput value={modalName} onChangeText={e=>setModalName(e)} />

            </CustomModal>

            <NameInput
                value={name}
                onChangeText={e => setName(e)}
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
                    renderItem={({ item }) =>
                        <ExerciseItemEdit
                            data={item}
                            editAction={() => editExercise(item)}
                            delAction={() => delExercise(item)}
                        />
                    }
                    keyExtractor={item => item.name}
                />
            </ExercisesArea>
        </Container>
    );
}

Page.navigationOptions = ({ navigation }) => {

    let isEdit = (navigation.state.params && navigation.state.params.workout) ? true : false;

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
        title: isEdit ? 'Editar Treino' : 'Adicionar Treino',
        headerRight: () => <SaveWorkoutButton />,
        headerRightContainerStyle: {
            marginRight: 10
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