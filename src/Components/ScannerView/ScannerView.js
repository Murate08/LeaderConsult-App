import React, {useState, useEffect} from 'react';

import { Text, View, StyleSheet, Button, SafeAreaView, Dimensions, Modal } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {RectButton} from 'react-native-gesture-handler'
import {FontAwesome} from '@expo/vector-icons'

import ScannerData from '../ScannerData/ScannedView';


// import { Container } from './styles';

export default function ScannerView (props) {
  const [modalVisible, setModalVisible] = React.useState(false);
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
    
    props.onCodeScanned(type, data)
     



    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  
 
  };


  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
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
       {scanned && 
              <View style={styles.refreshContainer}>
                  <RectButton  onPress={() => setScanned(false)} style={styles.btnRefresh}>
                    <FontAwesome name="qrcode"  size={50} color="#FFF" style={styles.btnRefresh} />  
                  </RectButton>
              </View>
      
          }    
           
            
        </View>           
         
        

          </View>


                
            
                
                <View style={styles.buttonContainer}>
                    <View style={styles.btnContainer}>
                        <RectButton style={styles.scanButton}
                            onPress={()=> this.props.navigation.navigate('ScannedData')}
                        >                        
                            <Text style={styles.buttonText}>Scan</Text>
                        </RectButton>   
                                           
                    </View>
               
                    <View style={styles.btnContainer}>
                        <RectButton style={styles.closeButton}>                        
                            <Text style={styles.buttonText}>Close</Text>
                        </RectButton>   
                                           
                    </View>
                    
                    
                </View>
                
             
               

      </View>
      
      </SafeAreaView>
     
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        
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
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#000'
     
   
    },
    scanButton: {
        backgroundColor: '#1169b0',
        borderRadius: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:180,
        height:60,     
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,  
        elevation: 5,
        marginTop:2,
    
      },
      closeButton: {
        backgroundColor: '#555555',
        borderRadius: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:180,
        height:60,     
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,  
        elevation: 5,
        marginTop:2,
    
      },
    
      buttonText: {
    //    fontFamily: 'Nunito_800ExtraBold',
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
      },
      refreshContainer:{        
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1169b0',
        width:100,
        height:100,
        borderRadius:8,
        opacity:0.6
      
    },
    refreshButtonText:{
        color:'#000',
        justifyContent:'center',
        alignItems:'center'
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

