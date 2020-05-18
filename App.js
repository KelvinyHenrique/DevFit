import React from 'react';
import {Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import {store, persistor} from './src/store'; 


//Importar o STACK

function App() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Text>Olá Mundo</Text>
        </PersistGate>
      </Provider>
    );
}


export default App;
