import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import MainPage from './Components/MainPage/MainPage'
import ScannedData from './Components/ScannerData/ScannedView'
import ScannerView from './Components/ScannerView/ScannerView'


const {Navigator, Screen} = createStackNavigator();


export default function Routes(){
    return(
        <NavigationContainer>
        <Navigator 
            screenOptions={{headerShown:false}}>      
                <Screen name="MainPage" component={MainPage} />     
                <Screen name="ScannedData" component={ScannedData} 
                options={{
                    headerShown: true,
                    title:"QRCode information"                    
                }}
        />  
                <Screen name="ScannerView" component={ScannerView} />  
               
         </Navigator>
         </NavigationContainer>
    )
}