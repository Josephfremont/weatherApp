import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';

import * as Location from 'expo-location';

export default function App({apiKey,location}) {
  
  const [ville, setVille] = useState(null);
  const [units, setUnits] = useState('metric');

  const [ isGps, setIsGps] = useState(null);

  const [errorMsg, setErrorMsg] = useState(null);
  const [result, setResult] = useState(null);
  const [temp, setTemp] = useState(null);
  const [logo, setLogo] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    
    if(location){
      console.log('test')
      axios({
        method:'get',
        // url: 'https://api.openweathermap.org/data/3.0/onecall?lat='+ location.coords.latitude +'&lon='+ location.coords.longitude +'&exclude=current&appid='+apiKey,
        url: 'https://api.openweathermap.org/data/2.5/weather?lat='+ location.coords.latitude +'&lon='+ location.coords.longitude +'&appid='+apiKey+'&units=metric&lang=fr',
      }).then(function(result) {
          console.log(result.data);
          // console.log('coord ', result.data.coord.lat, result.data.coord.lon)
          setResult(result.data ? true : false);
          setTemp(result.data.main.temp);
          setVille(result.data.name);
          setLogo("https://openweathermap.org/img/wn/"+ result.data.weather[0].icon+"@2x.png");
          setDescription(result.data.weather[0].description);
      })

    }
    
  }, [location])

  return (
    <View style={styles.container}>
      {
        result ?
        <View style={styles.position}>
          <Text>Vous êtes à {ville}</Text>
          <Text>{temp}°c</Text>
          <Image
            style={{width: 100,
              height: 100,
              resizeMode: 'stretch'}}
            src={logo}
          />
          <Text>{description}</Text>
        </View>
        : 
        <View style={styles.position}>
          <Text>Attendez une réponse va arriver</Text>
        </View>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  position: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});