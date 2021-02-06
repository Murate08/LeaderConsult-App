import React,{useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {RectButton} from 'react-native-gesture-handler'
import image1 from '../../assets/1.png'
import ScannerView from '../ScannerView/ScannerView';

// import { Container } from './styles';
export default function ScannerData(){
    
  const [type, setType] = React.useState("");
  const [data, setData] = React.useState("");
  const [scanned, setScanned] = useState(false);


  const onCodeScanned = (type, data) => {
    setType(type);
    setData(data);
   
  };

    
  return(
      <View style={styles.container}>
          <View style={styles.logoContent}>
              <Image source={image1} style={styles.image}/>
          </View>
          <View style={{alignItems:"center"}}>
            <View style={styles.contentData}>
                <ScannerView onCodeScanned={onCodeScanned}/>
                 <Text>Type: {type}</Text>
                 <Text>Data: {data}</Text>

            </View>
          </View>
            
          <View style={styles.buttonContainer}>
                    <View style={styles.btnContainer}>
                        <RectButton style={styles.button1}>                        
                            <Text style={styles.contactButtonText}>Button1</Text>
                        </RectButton>   
                                           
                    </View>
               
                    <View style={styles.btnContainer}>
                        <RectButton style={styles.button2}>                        
                            <Text style={styles.contactButtonText}>Button2</Text>
                        </RectButton>   
                                           
                    </View>
                    
                    
                </View>
          
      </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eeeeee',
        width:'100%'
    },
    logoContent:{
        paddingTop:60,
        alignItems:'center'

    },
    image:{
        resizeMode:'cover'
    }, 
    contentData:{
        marginTop:50,
        backgroundColor:'#fff',
        width:320,
        height:300,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,  
        elevation: 0.8,
       
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:10,

        
     
   
    },
    button1: {
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
      button2: {
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
    
      contactButtonText: {
    //    fontFamily: 'Nunito_800ExtraBold',
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
      },
})