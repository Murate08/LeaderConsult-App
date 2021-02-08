import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import {RectButton} from 'react-native-gesture-handler'
import qrCodeImage from '../../assets/qrcode.png'
import BackImage from '../../assets/back.jpg'
import { useNavigation } from '@react-navigation/native';

export default function MainPage() {
    const navigation = useNavigation();
    
    function handleScanStep() {
        navigation.navigate('ScannedData');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={BackImage} style={styles.backgroundImage}>
                <RectButton onPress={handleScanStep}>
                <View style={styles.imageConatiner}>                    
                        <Image source={qrCodeImage} style={styles.image}/>             
                </View>
                </RectButton>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    }, 
    backgroundImage:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems:'center',


    },
    imageConatiner:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1976d2',
        width:200,
        height:200,
        borderRadius:8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,  
        elevation:3.5,

    },
    image:{
        width:100,
        height:100,
        resizeMode:'cover'
    }
})
