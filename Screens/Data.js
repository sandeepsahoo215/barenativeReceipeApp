import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native";


const Data = ({navigation}) =>{

    const [ mainCource, setmainCource] = useState();
    

    const getData = async () =>{
        try {
         const item = await fetch( "https://api.sampleapis.com/recipes/recipes") ;
        const menu = await item.json();
        setmainCource(menu);
        
        // console.log(menu);
        } catch (error) {
           console.log(error); 
        }
    }

    useEffect( ()=>{
        getData();
     }, []);
     
    return (
        <View style={styles.maincontainer}>
            <FlatList data={mainCource} contentContainerStyle={{flexWrap:'wrap'}} numColumns={2}
                renderItem={({item})=>{
                    return <View style={styles.card}>
                    <View style={styles.imagecontainer}>
                        <Image style={styles.imgstyle} 
                        resizeMode="cover"
                        source={{uri: item.photoUrl}} />
                        <Text style={styles.title} numberOfLines = {1} ellipsizeMode = 'tail'>{item.title}</Text>
                        <View style={styles.rdm}>
                            <Text 
                            onPress = {() => navigation.navigate('Details', {item})}>Read more</Text>
                        </View>
                        </View>

                    </View>
                }}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    maincontainer: {
        width: "100%",       
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagecontainer:{ 
        padding:5,
    },
    imgstyle:{
        width: '100%',
        height:180,
        borderRadius:25,
        justifyContent : 'center'
    },
    card: {
        width:200,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        marginVertical:20,
        borderRadius:5,
    },
    rdm:{
        marginLeft:25,
        padding:10,
        paddingRight:20,
        borderWidth:1,
        borderRadius:8,
        borderColor:'red'
    },
    title: {
        fontSize:18,
        fontStyle:'bold'

    }

});


export default Data;