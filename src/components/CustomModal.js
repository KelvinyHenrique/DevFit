import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';


const ModalBoxArea = styled.KeyboardAvoidingView`
    flex:1;
    backgroundColor:rgba(0,0,0,0.5);
    justifyContent:center;
    alignItems:center;
`;


const ModalBox = styled.View`
    width:90%;
    padding:20px;
    backgroundColor:#FFF;
`;

const ModalClose = styled.TouchableHighlight`
    height:40px;
    alignSelf:flex-end;
`;

const CloseText = styled.Text`
    fontSize:25px;
`;

const ModalBody = styled.View``;

export default (props) => {
    return (
        <Modal visible={props.visible} transparent={true} animationType="fade">
            <ModalBoxArea>
                <ModalBox>
                    <ModalClose onPress={props.closeAction} underlayColor="transparent">
                        <CloseText>X</CloseText>
                    </ModalClose>
                    <ModalBody>
                        {props.children}
                    </ModalBody>
                </ModalBox>
            </ModalBoxArea>
        </Modal>
    );
}