import * as React from "react";
import { ImageBackground , Dimensions, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home  from './Screens/Home';
import Details from './Screens/Details'

const {height, width} = Dimensions.get('screen')

const App = ({navigation }) => {
return(
  <ImageBackground style = {{width, height }} source={require('./images/landingpage3.jpg')}>
    <Text onPress={()=> navigation.navigate('Home')} style={styles.font}>RECI</Text>
    <Text style={styles.font2}>COOK IT YOURSELF</Text>
  </ImageBackground>
)
}

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={App} options={{ title: 'Landing Page' }}  />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home Screen' }} />
        <Stack.Screen name="Details" component={Details} options={{ title: 'Recipe Screen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack


const styles = StyleSheet.create({
  font: {
    color:'white',
    fontSize:55,
    fontFamily:'Apple Color Emoji',
    marginTop: 300,
    marginLeft:150,

  },
  font2: {
    color:'white',
    marginLeft:150,
  },
})


