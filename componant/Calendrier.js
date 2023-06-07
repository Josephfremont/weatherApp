import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';

import * as Location from 'expo-location';

export default function App({apiKey,location}) {
  
  // const [ville, setVille] = useState(null);
  // const [units, setUnits] = useState('metric');

  // const [ isGps, setIsGps] = useState(null);

  // const [errorMsg, setErrorMsg] = useState(null);
  // const [result, setResult] = useState(null);
  // const [temp, setTemp] = useState(null);
  // const [logo, setLogo] = useState(null);
  // const [description, setDescription] = useState(null);

  // useEffect(() => {
    
  //   if(location){
  //     console.log('test')
  //     axios({
  //       method:'get',
  //       url: 'https://api.openweathermap.org/data/2.5/forecast?lat='+location.coords.latitude+'&lon='+ location.coords.longitude +'&appid='+apiKey+'&units=metric&lang=fr',
  //     }).then(function(result) {
  //         console.log(result.data);
  //         // console.log('coord ', result.data.coord.lat, result.data.coord.lon)
  //         setResult(result.data ? true : false);
  //         setTemp(result.data.main.temp);
  //         setVille(result.data.name);
  //         setLogo("https://openweathermap.org/img/wn/"+ result.data.weather[0].icon+"@2x.png");
  //         setDescription(result.data.weather[0].description);
  //     })

  //   }
    
  // }, [location])

  return (
    <View style={styles.container}>
      {
        // result ?
        // <View>
            
        //     <View style={styles.calendrier}>
        //         <Text style={{width: 100, height: 100}}>Vous êtes à {ville}</Text>
        //         <Text>{temp}°c</Text>
        //         <Image
        //             style={{width: 100,
        //             height: 100,
        //             resizeMode: 'stretch'}}
        //             src={logo}
        //         />
        //         <Text>{description}</Text>
        //     </View>
        //     <View style={styles.calendrier}>
        //         <Text>Vous êtes à {ville}</Text>
        //         <Text>{temp}°c</Text>
        //         <Image
        //         style={{width: 100,
        //             height: 100,
        //             resizeMode: 'stretch'}}
        //         src={logo}
        //         />
        //         <Text>{description}</Text>
        //     </View>
        // </View>
        // : 
        // <View style={styles.position}>
        //   <Text>Attendez une réponse va arriver</Text>
        // </View>

        <View style={styles.calendrierParent}>
            
            <View style={styles.calendrierChild}>
                <Text>test</Text>
                <Text>test°c</Text>
                <Text>test</Text>
            </View>
            <View style={styles.calendrierChild}>
                <Text>test</Text>
                <Text>test°c</Text>
                <Text>test</Text>
            </View>
        </View>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4F7FF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  calendrierParent: {
    // flex:1,
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: 'red'
  },
  calendrierChild: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'red'
    // margin: '10px',
  },
});