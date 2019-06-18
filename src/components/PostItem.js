import React, { PureComponent } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import actions from '../actions';

class PostItem extends PureComponent {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.post;
    return (
      <TouchableWithoutFeedback 
        onPress={() => console.log(this.props.post.id) }
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
      
        </View>
        
      </TouchableWithoutFeedback>
      
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 15,
    paddingLeft: 25, 
    paddingRight: 10
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};


export default connect(null , actions ) ( PostItem );
