import React from 'react';
import styled from 'styled-components/native';
import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
    flex: 1;
    justifyContent:center;
    alignItems:center;
    backgroundColor:#FFF;
    paddingLeft:30px;
    paddingRight: 30px;

`;
const WelcomeText = styled.Text`
    fontSize: 22px;
    color: #333;
    marginTop: 50px;
`;
const WelcomeImage = styled.View`
    flex:1;
    justifyContent:center;
`;
const WelcomeLogo = styled.Image`
    width:200px;
    height:200px;
`;

const ButtonText = styled.Text`
    color:#FFF;
`;

const BeginConfigArea = styled.View`
    alignItems:center;
    width:100%; 
    marginBottom:60px;

`;



const Page = (props) => {

    const start = () => {
        props.navigation.navigate('StarterName');
    }

    return (
        <Container>
            <WelcomeText>Bem vindo(a) ao DevFit</WelcomeText>
            
            <WelcomeImage>
                <WelcomeLogo source={require('../assets/boneco.png')} />
            </WelcomeImage>

            <BeginConfigArea>
                <DefaultButton width="90%" height="50px" bgColor="#0072C0" underlayColor="#0B7AC6" onPress={start}>
                    <ButtonText>Iniciar Configuração</ButtonText>
                </DefaultButton>
            </BeginConfigArea>
        </Container>
    );
}

Page.navigationOptions = {
    header: null
}

export default Page;