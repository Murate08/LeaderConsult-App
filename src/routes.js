import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Scanner from './Components/ScannerView/ScannerView'
import Scanned from './Components/ScannerData/ScannedView'

const mainRoute ={
    Scanner:{
        name:'Scanner',
        screen: Scanner
    },
    Scanned:{
        name:'Scanned',
        screen:Scanned
    }
}

const mainNavigator = createSwitchNavigator(mainRoute,{
    initialRouteName:'Scanner',
})

export default createAppContainer(mainNavigator)