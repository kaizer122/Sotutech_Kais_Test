import React from 'react';
import {Scene , Router } from 'react-native-router-flux';
import UserList from './components/UserList';
import PostDetail from './components/PostDetail';
import { StyleSheet } from 'react-native'
const RouterComponent = () => {
    return (
        <Router sceneStyle = {styles.routerStyle}>
            <Scene key = "root"  >
                <Scene key ="usersList" 
                component = {UserList} 
                title = "Users List" 
                headerStyle={styles.headerStyle}
                titleStyle = {styles.headerTitleStyle}
                initial
                />
                <Scene key ="postDetail" 
                component = {PostDetail} 
                title = "Post Detail" 
                headerStyle={styles.headerStyle}
                titleStyle = {styles.headerTitleStyle}
                />
                
            </Scene>
        </Router>
    );
};
const styles = StyleSheet.create({
    headerStyle: {
     backgroundColor: '#C70039',
 },
 headerTitleStyle : {
    backgroundColor: '#C70039',
    color: "#fff"
 },
 routerStyle: { 
     flex : 1 , 
     backgroundColor : "#fff"}
});
export default RouterComponent;