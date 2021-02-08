import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, Modal} from 'react-native';
import {RectButton} from 'react-native-gesture-handler'
import ScannerView from '../ScannerView/ScannerView'
import qrcodeImage from '../../assets/qr-icon.png'
import image1 from '../../assets/1.png'
import { useNavigation } from '@react-navigation/native';
//import api from '../../service/api'



export default function ScannerData(){
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(true);    
    const [type, setType] = useState("");
    const [data, setData] = useState("");

    const onCodeScanned = (type, data) => {
        setType(type);
        setData(data);
        setModalVisible(false);
      };
    
//   function handleSendQrcode(){
//     const qrcode = new FormData()
//      qrcode.append('type', type)
//      qrcode.append('data', data)
//      api.get('/qrcode')
//   }

    function handleBackMainPage() {
        navigation.navigate('MainPage');
      }  
    return(
        <View style={styles.container}>            
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
                
            > 
                <View style={styles.modal}>
                    <ScannerView  onCodeScanned={onCodeScanned}/>      
                </View>
                                                    
            </Modal>

            <View style={{alignItems:"center"}}>
                <View style={styles.logoContent}>
                    <Image source={image1} style={styles.image}/>
                </View>         
            
                <View style={styles.contentData} >    
                    <Image source={qrcodeImage} style={styles.qrImage}/> 
                    <View style={styles.dataInfo}>            
                        <Text style={styles.textInfo}>Type: {type}</Text>
                        <Text  style={styles.textInfo}>Data: {data}</Text>   
                    </View>        
                </View>
            </View>       
                
            <View style={styles.buttonContainer}>
                <View style={styles.btnContainer}>
                    <RectButton style={styles.button1}  onPress={() => setModalVisible(true)}>                        
                        <Text style={styles.buttonText}>Scan</Text>
                    </RectButton>                                  
                </View>
                
                <View style={styles.btnContainer}>
                    <RectButton style={styles.button2} onPress={handleBackMainPage}>                        
                        <Text style={styles.buttonText}>Back</Text>
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
        paddingTop:20,
        alignItems:'center'

    },
    image:{
        resizeMode:'cover'
    }, 
    qrImage:{
        width:80,
        height:80,
      
    
    },
    scanContent:{
        flex:1,
        paddingTop:10,

    },
    contentData:{
        marginTop:30,
        backgroundColor:'#fff',
        width:320,
        height:280,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,  
        elevation: 0.8,
        margin:5,
        paddingBottom:55
       
    },
    dataInfo:{
        paddingTop:15,
        color:'#000'
    },
    textInfo:{
        fontSize:18,
        
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:5,     
   
    },
    button1: {
        backgroundColor: '#1169b0',
        borderRadius: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        height:50,     
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,  
        elevation: 5,
        marginTop:2,
        marginLeft:20,
        paddingRight:10
     
    
      },
    button2: {
        backgroundColor: '#00e676',
        borderRadius: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        height:50,     
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,  
        elevation: 5,
        marginTop:2,
        marginRight:20,
        paddingRight:15
    
      },
    
    buttonText: {   
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
      },
    modal: {
        paddingTop:5,
        width:'100%',
        height:'98%',
      
      },
})