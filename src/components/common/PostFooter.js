
import React from 'react'
import { Text, View , StyleSheet } from 'react-native'


const PostFooter = (props) => {
    const { viewStyle } = styles 
    return (
        <View style = {viewStyle}>
       
        </View>
    )
}
const styles = StyleSheet.create( {
    viewStyle: {
        backgroundColor: '#e3e3e3',
        justifyContent: 'center',
        alignItems: 'center' ,     
        height: 10 ,
        shadowColor: '#000',
        shadowOffset: {width:0 , height: 2 },
        shadowOpacity: 0.2, 
        elevation: 2,
        position: 'relative'
    },
   
});

export { PostFooter };
