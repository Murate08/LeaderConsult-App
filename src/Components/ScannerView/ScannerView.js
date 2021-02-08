import React, {useState, useEffect} from 'react';

import { Text, View, StyleSheet, Button, SafeAreaView, Dimensions, Modal } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {RectButton} from 'react-native-gesture-handler'
import {FontAwesome} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';





export default function ScannerView (props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);  

    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      props.onCodeScanned(type, data);
      //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };


    if (hasPermission === null) {
      return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Requesting for camera permission</Text>
        </View>
      ) ;
    }
    if (hasPermission === false) {
      return (
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>No access to camera</Text>
          </View>
        )
    }

  
  return(
      <SafeAreaView  style={styles.container} >
          <View style={{flex:1}}>          
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
                 
            />
      
       
            <View style={styles.QRcontainer}>      
              <View style={styles.borderContent}>      
              </View>       
            </View>
          </View>
      </SafeAreaView>
)}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
      
        
  },
  QRcontainer:{
    width:Dimensions.get('window').width,
    height:'88%',
    justifyContent:'center',
    alignItems:'center',
    margin:1
    
       
  },
  buttonContainer:{
    flex:1,             
    opacity:0.6    
  },
  closeButton: {
    backgroundColor: '#555555',
    borderRadius: 2,
    height:50,
    width:80,     
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 5,
    marginTop:2,
  },
  borderContent:{
    borderWidth:2,
    borderColor:'#fff',
    borderStyle:'dashed',
    justifyContent:'center',
    alignItems:'center',
    width:200,
    height:200,
    borderRadius:8
  }
})

