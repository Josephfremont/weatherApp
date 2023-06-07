import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';

import * as Location from 'expo-location';

import Actually from './componant/Actually';
import Calendrier from './componant/Calendrier';

export default function App() {
  

  
  
  const [ville, setVille] = useState(null);
  const [units, setUnits] = useState('metric');
  const [apiKey, setApiKey] = useState('3f828c545dede0c2c53ab5eab4f3f27c');

  const [ isGps, setIsGps] = useState(null);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [result, setResult] = useState(null);
  const [temp, setTemp] = useState(null);
  const [logo, setLogo] = useState(null);
  const [description, setDescription] = useState(null);
  



  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  return (

    <View style={styles.container}>

      <Actually location={location} apiKey={apiKey}/>
      <Calendrier location={location} apiKey={apiKey}/>

      <StatusBar style="auto" />
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  position: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
