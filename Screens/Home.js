import { StyleSheet,View , Text, Image, TextInput } from "react-native";
import Data from "./Data";


const Home = ({navigation}) => {
    return (
        <><View style={styles.v1}>
            <Text style={styles.head}>
                Hello, <Text style={styles.innertext}>Alex</Text>
            </Text>
            <Text style={styles.h2}>
                what do you like to cook ?
            </Text>
            <Image style={styles.img} source={require('../images/face.jpg')}></Image>
        </View><TextInput style={styles.input}
            placeholder='search for receipe'
        ></TextInput>
        <View>
            <Text style={styles.tr}>Trending</Text>
        </View>

        <Data navigation = {navigation}/>
        </>
    )
}

const styles = StyleSheet.create ({
    fon: {
        color:'red',
        fontSize:55,
    },
    v1: {
        marginTop:10,
        marginLeft:30,
    },
    head:{
        fontSize:28,
        color:'black'
    },
    h2: {
        color:'grey'
    },
    img:{
       height:76,
       width:76,
       borderRadius:38,
       position:'absolute',
       marginLeft:250,
    },
    input: {
        marginTop:40,
        height: 40,
        margin: 12,
        width:400,
        borderWidth: 1,
        borderRadius:8,
        padding: 10,
    },
    innertext: {
        color:'red'
    },
    tr: {

        marginLeft:30,
        fontSize:24,
        color:'black'
    },
})


export default Home