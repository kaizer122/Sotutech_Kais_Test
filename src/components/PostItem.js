import React, { PureComponent } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import {selectPost} from '../actions';

class PostItem extends PureComponent {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.post;
    return (
      <TouchableOpacity 
        onPress={() => this.props.selectPost(id) }
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
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
    paddingRight: 10
  },
};

const mapStateToProps = state => {
console.log(state.selectedPost)
  return { selectedPost: state.selectedPost };
};


export default connect(mapStateToProps , {selectPost} ) ( PostItem );
