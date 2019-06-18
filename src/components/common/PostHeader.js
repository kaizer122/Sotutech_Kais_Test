
import React from 'react'
import { Text, View , StyleSheet } from 'react-native'


const PostHeader = (props) => {
    const { textStyle , viewStyle } = styles 
    return (
        <View style = {viewStyle}>
        <Text style = {textStyle}> {props.title} </Text>
        </View>
    )
}
const styles = StyleSheet.create( {
    viewStyle: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center' ,     
        height: 30 ,
        shadowColor: '#000',
        shadowOffset: {width:0 , height: 2 },
        shadowOpacity: 0.2, 
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 15,
        fontWeight: "bold",
        "color": "#009fff" ,
        
    }
});

export { PostHeader };
