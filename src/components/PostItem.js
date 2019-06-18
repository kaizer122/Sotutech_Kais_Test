import React, { PureComponent } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection , Button } from './common';
import { selectPost , commentShow , deletePost } from '../actions';

class PostItem extends PureComponent {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { titleStyle , containerStyle , LeftContainerStyle , RightContainerStyle } = styles;
    const { post } = this.props;
    console.log(post.id);
    return (
      <TouchableOpacity 
        onPress={() => {
          this.props.selectPost(post) 
          this.props.commentShow(post.id)}
          }
      >
        <View>
          <CardSection>
          <View style = {containerStyle}>

          <View style = {LeftContainerStyle}>
            <Text style={titleStyle}>
              {post.title}
            </Text>
          </View>
          <View style = {RightContainerStyle}>
              <Button label = {"delete"} onPress = { () => deletePost(post.id)}/>
            </View>
         

            </View>
          </CardSection>
      
        </View>
        
      </TouchableOpacity>
      
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 15,
    paddingLeft: 25, 
    paddingRight: 10,
  },
  containerStyle: {
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    flex: 1
  },
  LeftContainerStyle: {
    flex: 0.8
  },
  RightContainerStyle: {
    flex: 0.2
  }
};

const mapStateToProps = state => {
  return { selectedPost: state.selectedPost };
};

export default connect(mapStateToProps , {selectPost , commentShow , deletePost } ) ( PostItem );
