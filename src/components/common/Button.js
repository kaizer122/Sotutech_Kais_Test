import React from 'react' ;
import { Text, Image , TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({onPress , label }) => {
    return (
        <TouchableOpacity style = {styles.ButtonStyle} 
        onPress = {onPress}>
             <Image
             source={require('../../../assets/delete.png')}
             style={styles.ImageIconStyle}
             />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    ButtonStyle : {
        flex: 1,
        alignSelf: 'center',
        marginLeft : 5 , 
        marginRight: 5 ,
    },
    TextStyle : {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 18 , 
        fontWeight : '600',
        paddingTop : 10 ,
        paddingBottom : 10
    },
    ImageIconStyle : {
        height: 40,
        width: 40,
    }
})



export { Button };