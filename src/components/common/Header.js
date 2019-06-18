
import React from 'react'
import { Text, View , StyleSheet } from 'react-native'


const Header = (props) => {
    const { textStyle , viewStyle } = styles 
    return (
        <View style = {viewStyle}>
        <Text style = {textStyle}> {props.title} </Text>
        </View>
    )
}
const styles = StyleSheet.create( {
    viewStyle: {
        backgroundColor: '#97bbc7',
        justifyContent: 'center',
        alignItems: 'center' ,     
        height: 80 ,
        shadowColor: '#000',
        shadowOffset: {width:0 , height: 2 },
        shadowOpacity: 0.2, 
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30,
        paddingTop : 30,
        fontWeight: "bold",
        "color": "#fff" ,
        
    }
});

export { Header };
